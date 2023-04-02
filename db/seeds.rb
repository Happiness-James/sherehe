# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Seeding started...'
Event.delete_all
User.delete_all

User.create(
    [
        {
            username:"Happy",
            email:"happydontes@gmail.com",
            password:"1234895"
        },
        {
            username:"Jay",
            email:"jaymbalu@gmail.com",
            password:"6778789"
        }
    ]
)



Event.create(
    [
        {
          user_id: User.first.id,
          title: "The Giant Gila Monster",
          location: "Karen",
          Date: "July 3 2023",
          showtime: "04:00PM",
          Available_tickets: 27,
          price: 0,
          category: "live",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.first.id,
          title: "Manos: The Hands Of Fate",
          location: "Kikuyu",
          Date: "May 04 2023",
          showtime: "06:45PM",
          Available_tickets: 44,
          price: 500,
          category: "live",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.first.id,
          title: "Time Chasers",
          location: "kiambu",
          Date: "April 04 2023",
          showtime: "09:30PM",
          Available_tickets: 31,
          price: 1500,
          category: "upcoming",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.first.id,
          title: "Sol Fest",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 2500,
          category: "upcoming",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.first.id,
          title: "Nyege Nyege",
          location: "Langata",
          Date: "June 01 2023",
          showtime: "06:30PM",
          Available_tickets: 20,
          price: 1500,
          category: "live",
          poster: "https://netstorage-tuko.akamaized.net/images/9e11bd32f169f6e2.jpg"
        },
        
        {
          user_id: User.last.id,
          title: "Kids Fest",
          location: "Two Rivers",
          Date: "April 08 2023",
          showtime: "09:30PM",
          Available_tickets: 40,
          price: 1000,
          category: "online",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Women in tech",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 1500,
          category: "online",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Techies",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 1500,
          category: "live",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Men Conference",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 1500,
          category: "upcoming",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Dance to Inspire",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 1500,
          category: "online",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Art and Creative",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 1500,
          category: "upcoming",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Tembea Kenya",
          location: "Two Rivers",
          Date: "April 01 2023",
          showtime: "09:30PM",
          Available_tickets: 50,
          price: 1500,
          category: "upcoming",
          poster: "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg"
        },
        {
          user_id: User.last.id,
          title: "Shokeshoke",
          location: "Nairobi",
          Date: "Aug 5 2023",
          showtime: "4pm",
          Available_tickets: "40",
          price: "2000",
          category: "live",
          poster: "https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6",
        }
      ]
)

puts '✅ Done seeding'

