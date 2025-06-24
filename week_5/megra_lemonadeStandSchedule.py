"""
Author: Dagmawi Megra
Date: 23 June 2025
File Name: megra.lemonadeStandSchedule.py
Description: A program that creates a list of tasks for running a lemonade stand and assigns them to days of the week.
"""


"""Create a list of at least 5 tasks"""
tasks = [
    "gather supplies and ingredients",
    "prepare the lemonade",
    "set up the stand",
    "advertise and attract customers",
    "track sales and handle money"
]

""" A for loop to iterate over the list of tasks and print them to the console window. """
for task in tasks:
    print(task)

"""Create a list of days (Sunday through Saturday)."""
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

for day in days: 
    if day in ["Saturday", "Sunday"]:
        print( " Today is your day off! You should rest and recharge.")
    else:
        print("Your task for " + day + " is to " + tasks[days.index(day) % len(tasks)])