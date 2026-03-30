node {
    def appDir = "/var/www/starbucksjs-app"

    stage('Clean workspace') {
        echo "Cleaning workspace..."
        deleteDir()
    }

    stage('clone repository') {
        echo "Cloning repository..."
        git (
            branch: 'main',
            url: 'https://github.com/ziaulfakercc-07/starbuck-clone'

        )
}
stage('Deploy to EC2') {
    echo "Deploying to EC2..."
    sh """
        sudo mkdir -p ${appDir}
        sudo chown -R jenkins:jenkins ${appDir}

        rsync -av --delete --exclude='.git'
        --exclude='node_modules' ./ ${appDir}

        cd ${appDir} && npm install && npm start
        sudo npm install
        sudo npm run build
        sudo fuser -k 3000/tcp || true
        sudo npm run start
    """
}
}
