SELECT cohorts.name as name, AVG(completed_at - started_at) as average_assistance_time
FROM cohorts
JOIN assistance_requests on assistance_requests.id = cohorts.id
GROUP BY name
ORDER BY average_assistance_time;