Internship_Project ----- front end,
projectserver ---- Backend,
project---- mysql database,
Public ---- Images,
App.js --- file to run


 Internship-Project-b23cn122-
**Indian Frontline Assistance (IFA)** is a digital platform built to support Indian soldiers and veterans by providing services like retirement, leave, medical, and job applications, along with sections on eliminations, CSD, martyrs, medals, press updates, and completed army operations.

 How to run the project:

1) import the Main_Project.js in the App.js file

 2)In cmd type 'C:\MyApplications\client npm start' and run

 How to run the server:
 My project contains many server portsranging from 4000 to 4006
 to run them at once,
1) first run this command in your server directory
 'npm install concurrently --save-dev'

2)add ""scripts": {
  "start:all": "concurrently \"node ProjectServer/Eliminationserver.js\" \"node ProjectServer/Inaction.js\" \"node ProjectServer/Inactiondb.js\" \"node ProjectServer/RetireServer.js\" \"node ProjectServer/Jobserver.js\" \"node ProjectServer/Leaveserver.js\" \"node ProjectServer/Medicalserver.js\""
}" in package.json of server folder

3)npm run start:all
(all ports will be running)

Project tour:

1)Homepage
The main entry point where users can explore all available services and view the latest updates.

2)Eliminations
Displays records of eliminated threats, with data fetched from the backend.

3)Martyrs
A section dedicated to honoring soldiers who have sacrificed their lives in service.

4)CSD
Lists items available from the Canteen Stores Department for military personnel.

5)Medals
Showcases medals and honors awarded to soldiers for their achievements.

6)Press Updates
Provides recent news, mission updates, and official announcements.

8)Applications
After logging in (use username:md_afzal pw:afzal@123), users can access forms for retirement, job applications, medical support, and leave requests.


 
