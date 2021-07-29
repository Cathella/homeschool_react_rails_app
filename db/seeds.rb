 # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
teachers = Teacher.create([
  {
    name: "Nakitto Catherine"
  },
  {
    name: "Nakayiza Mariah"
  },
  {
    name: "Eyotaru Gloria"
  },
  {
    name: "Nayiga Suzan"
  }
])

lessons = Lesson.create([
  {
    title: "Introduction to Fractions",
    video_url: "zal8Nmn7UYs",
    description: "In this lesson, we introduce and define fractions.",
    topic: "Fractions",
    subject: "Mathematics",
    grade: "Primary One",
    teacher: teachers.first
  },
  {
    title: "She, He and Her",
    video_url: "zal8Nmn1234",
    description: "We introduce our daily sentences.",
    topic: "Present Speach",
    subject: "English",
    grade: "Primary Two",
    teacher: teachers.last
  },
  {
    title: "Introduction to Sets",
    video_url: "zalaghjin7UYs",
    description: "Learning set basics and applications.",
    topic: "Se Notation",
    subject: "Mathematics",
    grade: "Primary Seven",
    teacher: teachers.first
  },
])

reviews = Review.create([
  {
    title: "Interesting lesson",
    description: "Great audio and video",
    score: 5,
    lesson: lessons.first
  },
  {
    title: "Bad lesson",
    description: "Never liked it at all",
    score: 1,
    lesson: lessons.first
  },
  {
    title: "Fair lesson",
    description: "Well, average stuff",
    score: 3,
    lesson: lessons.last
  },
])

comments = Comment.create([
  {
    body: "Best lesson about this topic",
    author: "Jenny Ali",
    lesson: lessons.first
  },
  {
    body: "Seen something good today",
    author: "Kataline H",
    lesson: lessons.first
  }
])
