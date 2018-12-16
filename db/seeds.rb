# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def genTime(a, b)
  Time.now - rand(a..b)
end

## Demo Account
User.create(
  fname: 'Friend',
  lname: 'Account',
  email: 'demo@fliqr.com',
  username: 'Friend',
  password: 'starwars',
  created_at: genTime(5_000_000, 6_000_000)
)

## Seed Accounts
fnames = [
  'Valeria',
  'Norma',
  'Takaondwa',
  'Kohaku',
  'Sandra',
  'Joseph'
]
lnames = [
  'Gideon',
  'Yolonda',
  'Mavuto',
  'Yoshi',
  'Willard',
  'Ellington'
]
emails = [
  'valgid@yahoo.com',
  'yoyoland@hotmail.com',
  'takondwa@mavuto.com',
  'k.yoshi@email.com',
  'sandraw@aol.com',
  'ellingjoe@gmail.com'
]
usernames = [
  'vgideon25',
  'yoyoland',
  'mavuto999',
  'koyoshi',
  'willardpics',
  'gojoe'
]

password = 'starwars'

fnames.length.times do |i|
  User.create(
    fname: fnames[i],
    lname: lnames[i],
    email: emails[i],
    username: usernames[i],
    password: 'starwars',
    created_at: genTime(5_000_000, 6_000_000)
  )
end


## Photo Seeds

photos_info = [
  ['Junlge Steps', 'Charlie leading the way down'],
  ['Treats?', 'Can\'t say no to this face!'],
  ['Perchin', 'Hubby and wife lookin real fly'],
  ['Gold', ''],
  ['That Way!', 'Look over there, do you see it?'],
  ['Snowy Remnants', 'Twas a brisk morning.'],
  ['These Two', ''],
  ['A Friendly Face', 'Levi posed for a perfect shot during our walk'],
  ['Wrapped Up', 'I don\'t think she appreciated this'],
  ['Ears Up!', ''],
  ['Globe Life', 'It really is a small world'],
  ['Who\'s There?', 'A quick pit stop to rest'],
  ['Break Through', ''],
  ['The Life', 'We will return here someday'],
  ['Curve', ''],
  ['Picture Perfect', 'Love how this one turned out'],
  ['Nailed It', ''],
  ['Gray Way', ''],
  ['Classic', 'Not the tallest building in SF anymore! :('],
  ['Glow', ''],
  ['We Up High', ''],
  ['Point Taken', ''],
  ['Lakeside', 'Will live here someday'],
  ['Above', 'Almost fell out of the chopper taking this'],
  ['Still', 'We sat here for a long time. Breath taking'],
  ['Growth', 'Newly planted!!'],
  ['Fall', ''],
  ['Sup Bro?!', ''],
  ['Road Road', ''],
  ['Let\'s Do This!', ''],
  ['Van Lyfe', 'Killing the game!'],
  ['Pollen', 'What you lookin at?!'],
  ['Corgi', 'This guy was rad. New bestie!'],
  ['Dipped out', 'Down she went'],
  ['We Out Here', ''],
  ['Calm Blue', ''],
  ['Go Get It!', 'He had a blast today. Sleeping good tonight!'],
  ['Climb', ''],
  ['That View Though', ''],
  ['Not Fake', ''],
  ['Field Freinds', ''],
  ['Family', ''],
  ['Stand Off', 'We both stood there, frozen, for hours.'],
  ['The Light', ''],
  ['Swirl', ''],
  ['Sparkles', ''],
  ['Eees Cold', ''],
  ['Underworld', ''],
  ['The Beans', 'Bow down to the bean'],
  ['Lines', ''],
  ['Curious', ''],
  ['Those Colors', ''],
  ['Abstraction', ''],
  ['Bright', ''],
  ['Away We Go!'],
  ['Why You So Agro?', 'Whoo, Me?!'],
  ['All Eyes On Me!', ''],
  ['World Famous', '']
]

## Asset path
path = 'app/assets/images/seeds/'

user_ids = User.all.pluck(:id)

58.times do |i|
  photofile = File.open(path + "seed#{i+1}.jpg")
  thumbfile = File.open(path + "thumbs/seed#{i+1}.jpg")
  thumb_w, thumb_h = ImageSize.path(path + "thumbs/seed#{i+1}.jpg").size

  pic = Photo.new(
    img_title: photos_info[i][0],
    img_description: photos_info[i][1],
    user_id: user_ids.sample,
    thumb_width: thumb_w,
    thumb_height: thumb_h,
    created_at: genTime(900_000, 5_000_000),
  )

  pic.file.attach(io: photofile, filename: "#{SecureRandom.urlsafe_base64(5)}.jpg")
  pic.thumb.attach(io: thumbfile, filename: "#{SecureRandom.urlsafe_base64(5)}.jpg")

  pic.save!
end
