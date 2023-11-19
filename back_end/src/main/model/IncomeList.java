package model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class IncomeList {
    private ArrayList<Income> sources;

    public IncomeList() {
        sources = new ArrayList<>();
    }

    public void addIncome(Income income) {
        sources.add(income);
    }

    public double sumAmount() {
        double ret = 0;
        for(int i = 0; i < sources.size(); i++) {
            ret = Double.sum(ret, sources.get(i).getAmount());
        }
        return ret;
    }

    public List<Income> getSources() {
        return sources;
    }
    public int numSources() {
        return sources.size();
    }
}
