
import React from 'react';
import Charts from "../Charts/Charts";

function HomePage() {
  return (
    <main className="center" id="main">

        <div className="page-area">
          
            <article class="text-box">
                <h1>Be up to date in your finances</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
            
            <article class="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
          
            <article class="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
            
            <article class="text-box">
                <h1>Free Installation</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
           
            <article class="text-box">
                <h1>Stay update</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
           
            <article class="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
                <Charts></Charts>
           
        </div>
        </main>
  );
}

export default HomePage;
