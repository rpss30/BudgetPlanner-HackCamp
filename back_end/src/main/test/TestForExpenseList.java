// package test;

// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import static org.junit.jupiter.api.Assertions.*;

// public class TestForExpenseList {

//     @BeforeEach
//     public void setUp() {
//         food = new Expense("food", 8, 700, 500);
//         tuition = new Expense("tuition", 9, 1500, -200);

//         myExpenses = new ExpenseList();
//     }

//     @Test
//     public void testForConstructor() {
//         assertTrue(myExpenses.getExpenses());
//     }

//     @Test
//     public void testForAddExpense() {
//         assertTrue(myExpenses.size().equals(0));
//         myExpenses.add("food", 8, 700, 500);
//         assertTrue(myExpenses.size().equals(1));
//         myExpenses.add("tuition", 9, 1500, -200);
//         assertTrue(myExpenses.size().equals(2));
//     }

//     @Test
//     public void testForRemoveExpense() {
//         myExpenses.addExpense("food", 8, 700, 500);
//         myExpenses.addExpense("tuition", 9, 1500, -200);
//         assertTrue(myExpenses.size().equals(2));

//         myExpenses.removeExpense(food);
//         assertTrue(myExpenses.size().equals(1));
//         myExpenses.removeExpense(tuition);
//         assertTrue(myExpenses.size().equals(0));
//     }

//     @Test
//     public void testForGetExpenses() {
//         myExpenses.addExpense("food", 8, 700, 500);
//         myExpenses.addExpense("tuition", 9, 1500, -200);

//         List<String> names = myExpenses.getExpenseNames();
//         List<Double> values = myExpenses.getExpenseValues();
//         assertTrue(names[0] == food.getName());
//         assertTrue(values[0] == food.getCurrent());

//         assertTrue(names[1] == tuition.getName());
//         assertTrue(values[1] == tuition.getCurrent());
//     }

//     // @Test
//     // public void testForSoldCars() {
//     //     assertTrue(myShop.soldCars().isEmpty());
//     //     car1.sellCar();
//     //     myShop.addCar(car1);
//     //     assertEquals(1, myShop.soldCars().size());
//     //     assertTrue(myShop.soldCars().contains(car1));
//     //     car2.sellCar();
//     //     car3.sellCar();
//     //     myShop.addCar(car2);
//     //     myShop.addCar(car3);
//     //     assertEquals(3, myShop.soldCars().size());
//     //     assertTrue(myShop.soldCars().contains(car2));
//     //     assertTrue(myShop.soldCars().contains(car3));
//     // }

//     // @Test
//     // public void testForNumAllCars() {
//     //     myShop.addCar(car1);
//     //     assertEquals(1, myShop.numCars());
//     //     myShop.addCar(car2);
//     //     assertEquals(2, myShop.numCars());
//     // }

//     // @Test
//     // public void testForAllCars() {
//     //     myShop.addCar(car1);
//     //     assertEquals(1, myShop.allCars().size());
//     //     assertTrue(myShop.allCars().contains(car1));
//     //     myShop.addCar(car2);
//     //     myShop.addCar(car3);
//     //     assertEquals(3, myShop.allCars().size());
//     //     assertTrue(myShop.allCars().contains(car2));
//     //     assertTrue(myShop.allCars().contains(car3));
//     // }

//     // @Test
//     // public void testForDuplicateCars() {
//     //     myShop.addCar(car1);
//     //     myShop.addCar(car1);
//     //     assertEquals(2, myShop.numCars());
//     // }

//     // @Test
//     // public void testForUnsoldCars() {
//     //     myShop.addCar(car1);
//     //     myShop.addCar(car2);
//     //     myShop.addCar(car3);
//     //     assertEquals(myShop.numCars(), myShop.unsoldCars().size());
//     //     assertTrue(myShop.unsoldCars().contains(car1));
//     //     assertTrue(myShop.unsoldCars().contains(car2));
//     //     assertTrue(myShop.unsoldCars().contains(car3));

//     //     car1.sellCar();
//     //     assertEquals(myShop.numCars() - myShop.numSoldCars(), myShop.unsoldCars().size());
//     //     assertFalse(myShop.unsoldCars().contains(car1));
//     //     assertTrue(myShop.unsoldCars().contains(car2));
//     //     assertTrue(myShop.unsoldCars().contains(car3));

//     //     car2.sellCar();
//     //     car3.sellCar();
//     //     assertEquals(0, myShop.unsoldCars().size());
//     // }
// }
