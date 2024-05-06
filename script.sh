cp -f  /var/lib/jenkins/workspace/.envvars/.env .
cat << EOF > /var/lib/jenkins/workspace/cv-blogs-backend-pipeline/backend/.env
$env.DATABASE_URL
$DATABASE_URL
EOF