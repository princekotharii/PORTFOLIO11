import { useState, useEffect } from 'react';
import { projectAPI, skillAPI, educationAPI, achievementAPI, statusAPI } from '../services/api';
import { fallbackData } from '../data/fallbackData';

export const usePortfolioData = () => {
  const [data, setData] = useState(fallbackData); // ✅ Start with fallback immediately
  const [loading, setLoading] = useState(false); // ✅ Changed to false so content shows immediately
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
          fetchWithTimeout(projectAPI.getAll()),
          fetchWithTimeout(skillAPI.getAll()),
          fetchWithTimeout(educationAPI.getAll()),
          fetchWithTimeout(achievementAPI.getAll()),
          fetchWithTimeout(statusAPI. get()),
        ]);

        const [projectsRes, skillsRes, educationRes, achievementsRes, statusRes] = results;

        // Check if ANY request succeeded
        const anySucceeded = results.some(result => result.status === 'fulfilled');
        setIsBackendAvailable(anySucceeded);

        if (anySucceeded) {
          console.log('✅ Backend connected, using API data where available');
          
          // Merge API data with fallback
          setData({
            hero: fallbackData.hero, // Always from fallback
            about: fallbackData.about, // Always from fallback
            projects: 
              projectsRes.status === 'fulfilled' && projectsRes.value?. data?. data?. projects
                ? projectsRes.value. data.data.projects
                : fallbackData.projects,
            skills: 
              skillsRes.status === 'fulfilled' && skillsRes.value?.data?.data?.skills
                ? skillsRes.value.data.data.skills
                : fallbackData.skills,
            education:
              educationRes.status === 'fulfilled' && educationRes.value?.data?. data?.education
                ? educationRes.value.data.data. education
                : fallbackData. education,
            achievements:
              achievementsRes.status === 'fulfilled' && achievementsRes.value?.data?.data?.achievements
                ? achievementsRes. value.data.data.achievements
                : fallbackData.achievements,
            status:
              statusRes.status === 'fulfilled' && statusRes.value?.data?.data?.status
                ? statusRes. value.data.data.status
                : fallbackData.status,
          });
        } else {
          console.log('🔴 Backend unavailable, using fallback data');
          setData(fallbackData);
        }

        setError(null);
      } catch (err) {
        console.error('❌ Error fetching portfolio data:', err);
        setError(err.message);
        setData(fallbackData);
        setIsBackendAvailable(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error, isBackendAvailable };
};