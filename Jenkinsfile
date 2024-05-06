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
        sh 'printenv'
        sh "echo ${env.BRANCH_NAME}"
        echo 'Docker build'
        sh 'docker-compose up --build -d'
      }
    }
  }
}