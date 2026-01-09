import { useState, useEffect } from 'react';
import { projectAPI, skillAPI, educationAPI, achievementAPI, statusAPI , profileAPI } from '../services/api';
import { fallbackData } from '../data/fallbackData';

export const usePortfolioData = () => {
  // ✅ Check for saved profile data in localStorage
  const getSavedProfile = () => {
    try {
      const savedProfile = localStorage.getItem('portfolioProfile');
      return savedProfile ? JSON.parse(savedProfile) : {};
    } catch (error) {
      console.error('Error reading saved profile:', error);
      return {};
    }
  };

  const profileOverrides = getSavedProfile();

  // ✅ Merge fallbackData with localStorage overrides
  const initialData = {
    ... fallbackData,
    hero: { ...fallbackData.hero, ... profileOverrides.hero },
    about: { ...fallbackData. about, ...profileOverrides.about }
  };

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isBackendAvailable, setIsBackendAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create promises with timeout
        const timeout = 3000; // 3 seconds timeout
        
        const createTimeoutPromise = () => 
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Request timeout')), timeout)
          );

        const fetchWithTimeout = (promise) => 
          Promise.race([promise, createTimeoutPromise()]);

        // Try to fetch from API with timeout
        const results = await Promise.allSettled([
          fetchWithTimeout(profileAPI.get()),
          fetchWithTimeout(projectAPI.getAll()),
          fetchWithTimeout(skillAPI.getAll()),
          fetchWithTimeout(educationAPI.getAll()),
          fetchWithTimeout(achievementAPI.getAll()),
          fetchWithTimeout(statusAPI. get()),
        ]);

        const [profileRes,projectsRes, skillsRes, educationRes, achievementsRes, statusRes] = results;

        // Check if ANY request succeeded
        const anySucceeded = results.some(result => result.status === 'fulfilled');
        setIsBackendAvailable(anySucceeded);

        if (anySucceeded) {
  console.log('✅ Backend connected, using API data where available');
  
  // ✅ Use profile from API if available
  const heroData = profileRes.status === 'fulfilled' && profileRes.value?. data?.data?.profile?. hero
    ? profileRes.value.data. data.profile.hero
    :  fallbackData.hero;

  const aboutData = profileRes. status === 'fulfilled' && profileRes.value?.data?.data?. profile?.about
    ? profileRes.value.data.data.profile.about
    : fallbackData.about;

  setData({
    hero: heroData,
    about: aboutData,
    projects: 
      projectsRes.status === 'fulfilled' && projectsRes.value?. data?.data?.projects
        ? projectsRes.value. data.data.projects
        :  fallbackData.projects,
    skills: 
      skillsRes.status === 'fulfilled' && skillsRes.value?.data?. data?.skills
        ? skillsRes.value.data.data. skills
        : fallbackData. skills,
    education: 
      educationRes.status === 'fulfilled' && educationRes.value?.data?.data?.education
        ? educationRes.value.data.data.education
        : fallbackData.education,
    achievements:
      achievementsRes.status === 'fulfilled' && achievementsRes.value?. data?.data?.achievements
        ?  achievementsRes.value.data.data.achievements
        : fallbackData.achievements,
    status: 
      statusRes.status === 'fulfilled' && statusRes.value?.data?.data?.status
        ? statusRes.value.data. data.status
        : fallbackData.status,
  });
} else {
          console.log('🔴 Backend unavailable, using fallback data');
          // ✅ Use fallback with localStorage overrides
          setData({
            ... fallbackData,
            hero:  { ...fallbackData.hero, ...profileOverrides.hero },
            about: { ...fallbackData.about, ...profileOverrides. about }
          });
        }

        setError(null);
      } catch (err) {
        console.error('❌ Error fetching portfolio data:', err);
        setError(err.message);
        // ✅ Fallback with localStorage overrides
        setData({
          ...fallbackData,
          hero: { ...fallbackData.hero, ...profileOverrides. hero },
          about: { ... fallbackData.about, ...profileOverrides.about }
        });
        setIsBackendAvailable(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error, isBackendAvailable };
};