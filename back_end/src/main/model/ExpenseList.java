package model;

import java.util.ArrayList;
import java.util.List;

// Represents a dealership with a brand name consisting of cars that are either sold or not
public class ExpenseList {
    private List<Expense> expenses;

    // EFFECTS: constructs a list of expenses 
    public ExpenseList() {
        expenses = new ArrayList<>();
    }

    public void addExpense(String name, int weight, double current, double goal) {
        Expense newExp = new Expense(name, weight, current, goal);
        this.expenses.add(newExp);
    }

    public void removeExpense(Expense exp) {
        for (Expense expense : this.expenses) {
            if (exp.equals(expense)) {
                this.expenses.remove(expense);
                return;
            }
        }

    }

    public List<Expense> getExpenses() {
        return this.expenses;
    }

    // EFFECTS: returns a list of names of expenses
    public List<String> getExpenseNames() {
        List<String> expNames = new ArrayList<>();
        for (Expense expense : this.expenses) {
            expNames.add(expense.getName());
        }
        return expNames;
    }

    // EFFECTS: returns a list of values of expense
    public List<Double> getExpenseValues() {
        List<Double> expValues = new ArrayList<>();
        for (Expense expense : this.expenses) {
            expValues.add(expense.getCurrent());
        }
        return expValues;
    }
}

    