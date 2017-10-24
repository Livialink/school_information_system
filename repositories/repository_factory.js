let repositoryFactory = function(){

    let repos = this;

    let repositories = [
        {name : 'student', source : require('./student_repository')},
        {name : 'course', source : require('./course_repository')},
        {name : 'user', source : require('./user_repository')},
        {name : 'result', source : require('./result_repository')}
    ];

    repositories.forEach(function(repo){
        repos[repo.name] = repo.source;
    })
};

module.exports = new repositoryFactory();