# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




## Demo Account
User.create(
  fname: 'Friend',
  lname: 'Account',
  email: 'demo@fliqr.com',
  username: 'Friend',
  password: 'starwars'
)

## Seed Accounts
fnames = [
  'Dude',
  'Walter',
  'Donny',
  'Jesus',
  'Anton',
  'Carla',
  'Whoopi',
  'Ada',
  'Meryl',
  'Frido'
]
lnames = [
  'Lebowski',
  'Sobchak',
  'Keraboatsos',
  'Quintana',
  'Chigurh',
  'Moss',
  'Goldberg',
  'Lovelace',
  'Streep',
  'Kahlo'
]
emails = [
  'the_dude@abides.com',
  'walter@veteran.com',
  'donald@bowling.com',
  'bowlmaster@jesus.org',
  'anton@friendo.com',
  'carlajean@hotmail.com',
  'whoopi@notreal.com',
  'brilliant@babe.com',
  'streep@amazing.com',
  'frido@kahlo.net'
]
usernames = [
  'the_dude',
  'walter67',
  'shutupdonny',
  'jesusquin',
  'friendo',
  'carla_jean',
  'whoopi_gold',
  'smarterthanyou',
  'streepstreet',
  'art4lyfe'
]
password = 'starwars'

fnames.length.times do |i|
  User.create(
    fname: fnames[i],
    lname: lnames[i],
    email: emails[i],
    username: usernames[i],
    password: 'starwars'
  )
end

user_ids = User.all.pluck(:id)

## Photo Seeds
path = '/Users/nate/Desktop/fliqr_photos/'

34.times do |i|
  pic = Photo.new(img_title: 'my photo', user_id: user_ids.sample)
  file = File.open(path + "seed#{i+1}.jpeg")
  pic.photo.attach(io: file, filename: 'seed#{i+1}.jpeg')
  pic.save!
end

## Comment Seeds
