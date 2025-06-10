""" 
    Title: megra_lemonadeStand.py
    Author: Dagmawi Megra
    Date: 9 June 2025
    Description: This function calculates the cost of making lemonade and the profit from selling it.
"""
def calculate_cost(lemons_cost, sugar_cost):
    total_cost = lemons_cost + sugar_cost # Calculating the total cost
    return total_cost # Returning the total cost

def calculate_profit(lemons_cost, sugar_cost, selling_price):
    cost = calculate_cost(lemons_cost, sugar_cost) # Using the calculate_cost function to get the total cost
    profit = selling_price - cost # Calculating the profit 
    return profit # Returning the profit


# Variables for testing purposes 
lemons_cost = 3.00 
sugar_cost = 5.00 
selling_price = 12.00

# Create variables to call each function using the variables above.
total_cost = calculate_cost(lemons_cost, sugar_cost)
profit = calculate_profit(lemons_cost, sugar_cost, selling_price)

# Use a variable to build a string for the results
result_string = "Cost of lemons: ${0} + Cost of sugar: ${1} = Total cost: ${2:.2f}\nSelling price: ${3:.2f}\nProfit: Selling price - Total cost = ${4:.2f}".format(
    lemons_cost, sugar_cost, total_cost, selling_price, profit)

#print the results to the console using an output variable and string concatenation.
print("Profit summary: \n" + result_string)  # Print the output to the console