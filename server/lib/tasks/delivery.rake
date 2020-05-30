namespace :airands do

  desc "Generates swagger API and docs"
  task rswag: :environment do
    puts 'rswag execution -> swagger/swagger.yaml'
    sh "RAILS_ENV=test rails rswag"
  end

  desc "Executes client openapi-generator"
  task api: :environment do
    Rake::Task["airand:rswag"].invoke

    client_dir = "#{Rails.root}/../client"
    sh "cd #{client_dir} && yarn openapi"
  end

end
