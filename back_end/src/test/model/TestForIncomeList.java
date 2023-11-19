package model;

import model.Income;
import model.IncomeList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class TestForIncomeList {
    IncomeList incomeList;
    Income source0;
    Income source1;
    Income source2;

    @BeforeEach
    public void setUp() {
        incomeList = new IncomeList();
        source0 = new Income("a", 10);
        source1 = new Income("b", 15);
        source2 = new Income("c", 20);
    }

    @Test
    public void testIncomeConstructor() {

        assertEquals("a", source0.getSource());
        assertEquals("b", source1.getSource());
        assertEquals("c", source2.getSource());
        assertEquals(10, source0.getAmount());
    }

    @Test
    public void testIncomeListConstructor() {
        ArrayList<Income> testList = new ArrayList<>();
        incomeList.addIncome(source0);
        testList.add(source0);
        assertEquals(testList, incomeList.getSources());
        testList.add(source1);
        incomeList.addIncome(source1);
        assertEquals(testList, incomeList.getSources());
        testList.add(source2);
        incomeList.addIncome(source2);
        assertEquals(testList, incomeList.getSources());
    }

    @Test
    public void testSumAmount() {
        incomeList.addIncome(source0);
        assertEquals(10, incomeList.sumAmount());
        incomeList.addIncome(source1);
        assertEquals(25, incomeList.sumAmount());
        incomeList.addIncome(source2);
        assertEquals(45, incomeList.sumAmount());
    }
}
