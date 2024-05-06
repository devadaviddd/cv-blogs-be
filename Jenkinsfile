pipeline {
  agent any
  stages{
    stage('Build') {
      steps {
        echo 'In Build Stage'
        echo 'Build Stage Path'
        sh 'pwd'
        echo 'Get Github Env Variables'
        sh 'printenv'
        sh "echo ${env.DATABASE_URL}"
        echo 'Load .env file and variables'
        sh 'sh script.sh'
        echo 'Docker build'
        sh 'docker-compose up --build -d'
      }
    }
  }
}