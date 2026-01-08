import { useState, useEffect } from 'react';
import { projectAPI, skillAPI, educationAPI, achievementAPI, statusAPI } from '../services/api';
import { fallbackData } from '../data/fallbackData';

export const usePortfolioData = () => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBackendAvailable, setIsBackendAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all data from API
        const [projectsRes, skillsRes, educationRes, achievementsRes, statusRes] = await Promise.all([
          projectAPI.getAll().catch(() => null),
          skillAPI. getAll().catch(() => null),
          educationAPI.getAll().catch(() => null),
          achievementAPI.getAll().catch(() => null),
          statusAPI.get().catch(() => null),
        ]);

        // Check if backend is available
        const backendAvailable = projectsRes || skillsRes || educationRes || achievementsRes || statusRes;
        setIsBackendAvailable(!! backendAvailable);

        // Update data with API responses (fallback to hardcoded data if API fails)
        setData({
          hero: fallbackData.hero, // Hero is always from fallback
          about: fallbackData.about, // About is always from fallback
          projects: projectsRes?. data?. data?. projects || fallbackData.projects,
          skills: skillsRes?.data?.data?.skills || fallbackData.skills,
          education: educationRes?.data?.data?.education || fallbackData.education,
          achievements: achievementsRes?. data?.data?.achievements || fallbackData.achievements,
          status: statusRes?.data?.data?.status || fallbackData.status,
        });

        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err.message);
        // Use fallback data on error
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