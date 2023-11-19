package model;

// Represents a car with given features and sale status
public class Expense {
    private String name;
    private int weight;
    private double current;
    private double goal;

    // REQUIRES: 1 <= weight <= 10
    //           current >= 0
    //           if goal is -ve, then you want to increase the expense, else you want to decrease it
    // EFFECTS: constructs an expense object with a name, weight to quantify its importance, the current amount of expense and the goal 
    public Expense(String name, int weight, double current, double goal) {
        this.name = name;
        this.weight = weight;
        this.current = current;
        this.goal = goal;
    }


    public String getName() {
        return name;
    }

    public int getWeight() {
        return weight;
    }

    public double getCurrent() {
        return current;
    }

    public double getGoal() {
        return goal;
    }
}
