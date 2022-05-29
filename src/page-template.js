const generatePage = (data) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <title>Team Profile</title>
    </head>
  
    <body>
        <h1>TEAM PROFILE</h1>
        <div class=".col-md-4" >
            <h2>Manager</h2>
            <h3>${data.managerName}</h3>
            <h3>${data.managerId}</h3>
            <h3><a href='mailto:${data.managerEmail}'>${data.managerEmail}</a></h3>
            <h3>${data.managerOffice}</h3>
        </div>
        <div class=".col-md-4">
            <h2>Engineer</h2>
            <h3>${data.engineerName}</h3>
            <h3>${data.engineerId}</h3>
            <h3><a href='mailto:${data.engineerEmail}'>${data.engineerEmail}</a></h3>
            <h3><a href='https://github.com/${data.engineerGithub}'>${data.engineerGithub}</a></h3>
        </div>
        <div class=".col-md-4">
            <h2>Intern</h2>
            <h3>${data.internName}</h3>
            <h3>${data.internId}</h3>
            <h3><a href='mailto:${data.internEmail}'>${data.internEmail}</a></h3>
            <h3><a href='https://github.com/${data.internGithub}'>${data.internGithub}</a></h3>
        </div>
    </body>
    </html>
    `;
  };

  module.exports = generatePage