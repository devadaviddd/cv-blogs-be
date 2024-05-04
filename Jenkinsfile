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
        echo 'Docker build'
        sh 'sudo docker-compose up --build -d'
      }
    }
  }
}