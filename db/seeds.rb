 # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

user = User.create(username: "test", password: "test", phone: "123456789", grade: "Preschool", age: 5)

# teachers = Teacher.create([
#   {
#     name: "Nakitto Catherine"
#   },
#   {
#     name: "Nakayiza Mariah"
#   },
#   {
#     name: "Eyotaru Gloria"
#   },
#   {
#     name: "Nayiga Suzan"
#   }
# ])

# lessons = Lesson.create([
#   {
#     title: "Introduction to Fractions",
#     video_url: "zal8Nmn7UYs",
#     description: "In this lesson, we introduce and define fractions.",
#     topic: "Fractions",
#     subject: "Mathematics",
#     grade: "Primary One"
#   },
#   {
#     title: "She, He and Her",
#     video_url: "zal8Nmn1234",
#     description: "We introduce our daily sentences.",
#     topic: "Present Speech",
#     subject: "English",
#     grade: "Primary Two"
#   },
#   {
#     title: "Introduction to Sets",
#     video_url: "zalaghjin7UYs",
#     description: "Learning set basics and applications.",
#     topic: "Set Notation",
#     subject: "Mathematics",
#     grade: "Primary Seven"
#   },
# ])

# reviews = Review.create([
#   {
#     description: "Great audio and video",
#     score: 5,
#     lesson: lessons.first
#   },
#   {
#     description: "Never liked it at all",
#     score: 1,
#     lesson: lessons.first
#   },
#   {
#     description: "Well, average stuff",
#     score: 3,
#     lesson: lessons.last
#   },
# ])

