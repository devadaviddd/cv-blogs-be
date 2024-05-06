pipeline {
  agent any
  stages{
    stage('Build') {
      steps {
        echo 'In Build Stage'
        echo 'Build Stage Path'
        sh 'pwd'
        echo 'Load .env file'
        sh 'sh script.sh'
        echo 'Get Github Env Variables'
        echo 'DATABASE_URL' %DATABASE_URL%
        echo 'DATABASE_URL' %GIT_DATABASE_URL%
        
        echo 'Docker build'
        sh 'docker-compose up --build -d'
      }
    }
  }
}