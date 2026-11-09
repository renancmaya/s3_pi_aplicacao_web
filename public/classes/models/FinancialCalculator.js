export default class FinancialCalculator {
    static sumAll (items) {
        return items.reduce((summary, item) => {
            const value = item.value;

            if (value > 0) {
                summary.income += value;
            } else {
                summary.expense += value;
            }

            summary.total += value;
            return summary;
        }, {income: 0, expense: 0, total: 0}); 
    }
}
