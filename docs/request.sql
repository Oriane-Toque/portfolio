-- Récupération de tous les projets (nom, image, icons langages + technologies)
SELECT project.name, project.picture, 
GROUP_CONCAT(DISTINCT project_langage.langage_id) AS "languages",
GROUP_CONCAT(DISTINCT project_technology.technology_id) AS "technologies" 
FROM project
INNER JOIN project_langage ON project.id = project_langage.project_id
LEFT JOIN project_technology ON project.id = project_technology.project_id
GROUP BY project.id