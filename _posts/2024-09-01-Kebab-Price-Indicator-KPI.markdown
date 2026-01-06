---
layout: post

ogtype: article
ogimage: /assets/img/kebab.webp


title:  "KPI: Kebab Price Indicator"
date:   2024-09-02 16:49:00 +0200

categories: life excel
description: New economic indicator, the Kebab Price Indicator "KPI"
ogdescription: New economic indicator, the Kebab Price Indicator "KPI"
excerpt_separator: <!--more-->
---

Introducing the **Kebab Price Indicator**! 
<img src="/assets/img/chart.gif" style="float:left"/>
The Kebab Price Indicator (_KPI_) is a groundbreaking economic measure designed to provide a unique perspective on the overall health of a nation's economy, particularly its consumer confidence and purchasing power. By tracking the price fluctuations of kebabs, a popular and affordable food item, the KPI offers a more nuanced understanding of economic trends compared to traditional indicators like GDP or inflation rates.
<!--more-->
![kebab with stock in background](/assets/img/kebab.webp){:style="float:right; width:250px; margin:1em"}
Unlike traditional economic indicators, which often focus on broad macroeconomic factors, the KPI provides a granular view of consumer behavior at the grassroots level. Kebabs, as a widely consumed and affordable food item, serve as a reliable barometer of consumer purchasing power. When people are hesitant to spend on kebabs, it suggests a general decline in consumer confidence and a potential economic downturn, often accompanied by rising inflation. This is because as inflation rises, the purchasing power of consumers decreases, making it more difficult to afford everyday items like kebabs. Conversely, an increase in kebab prices or demand can indicate a thriving economy with rising consumer spending, but it's important to consider inflation rates. If kebab prices are rising due to inflation, it may not necessarily indicate a strong economy, as consumers may be spending more on the same quantity of goods and services.

The KPI's simplicity and accessibility make it a valuable tool for policymakers, economists, and investors alike. By monitoring changes in kebab prices over time, policymakers can identify early warning signs of economic instability and adjust their policies accordingly. Economists can use the KPI to refine their models and gain a deeper understanding of consumer behavior. Investors can leverage the KPI to make more informed decisions about their portfolios, as it can provide insights into the overall economic outlook and potential market trends.

In conclusion, the Kebab Price Indicator offers a fresh and innovative approach to measuring economic health. By focusing on the everyday choices of consumers, the KPI provides a more nuanced and relatable understanding of economic trends. As the KPI continues to be refined and adopted, it has the potential to become a valuable addition to the economist's toolkit, providing valuable insights into the complexities of the modern economy. [^1]

Here's the current data:
<script src="https://d3js.org/d3.v6.js"></script>
<div id="my_dataviz"></div>

Are you ready to make a difference? Join the Kebab Price Indicator (KPI) initiative and contribute to a groundbreaking new economic measure. By sharing your personal kebab price experiences, you'll be helping us create a more accurate and representative picture of the global economy. Send us an email by clicking the image on the left or fill this form which will prepare the email for you. [^2]

<div style="display:grid; flex-direction: row; justify-content: center; align-items: center">
    <label for="price">Price: </label>
    <input id="price" type="number" placeholder="Price" min=0 onKeyUp="sendEmail()">
    <label for="currency">Currency: </label>
    <select name="currency" id="currency" onchange="sendEmail()">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="CHF">CHF</option>
        <option value="Other <please put your currency here>">Other, please put it in the email, sorry I'm lazy</option>
    </select>
    <label for="date">Date: </label>
    <input  id="date" type="date" onchange="sendEmail()">
    <label for="location">Location: </label>
    <textarea id="location" placeholder="where from?" onKeyUp="sendEmail()"></textarea>

    <div class="flex justify-center">
    <a href="mailto:stefano@stefanogavioli.eu" id="send_email"><button href="">Send Email</button></a>
    </div>
</div>

<div class="tenor-gif-embed" data-postid="26581555" data-share-method="host" data-aspect-ratio="1.01911" data-width="330px"><a href="https://tenor.com/view/gusto-ko-to-gif-26581555">Gusto Ko To GIF</a>from <a href="https://tenor.com/search/gusto+ko+to-gifs">Gusto Ko To GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

[^1]: ["I want to introduce a new economic measure, named KPI, Kebab Price Indicator, write a paragraph introducing it" prompt.](https://g.co/gemini/share/a1b478fb2e5c)
    Gemini, Google, 2 September 2024,
    [https://gemini.google.com/](https://gemini.google.com/)

[^2]: <div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center;"><span>also this cta was made with Gemini </span> <div class = "gif ieEvil" style="margin-left: 10px"></div><div>

<script>
    function sendEmail() {
        var link = document.getElementById('send_email');
        var price = document.getElementById('price').value;
        var currency = document.getElementById('currency').value;
        var date = document.getElementById('date').value;
        var location = document.getElementById('location').value;
        var dateObj = new Date(date)
        var subject = "KPI contribution from " + location + ", " + (dateObj.getMonth()+1) + "-"+dateObj.getFullYear();
        var message = "Hello, I'm happy to contribute to the KPI initiative. Here's my experience |Date: " + date + "| Price: " + price + "| From: " + location + "| Kind regards -- "
        var email = "stefano@stefanogavioli.eu";
        var href = "mailto:" + email + "?subject=" + subject + "&body=" + message;
        link.setAttribute("href", href);
    }
</script>

<script>

// set the dimensions and margins of the graph
const margin = {top: 10, right: 60, bottom: 30, left: 60},
    width = Math.min(document.documentElement.clientWidth,1300)- margin.left - margin.right,
    height = Math.min(document.documentElement.clientWidth,400) - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

//Read the data
d3.csv("https://stefanogavioli.eu/assets/kpi/kpi.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  }).then(

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(d3.timeYear));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "mid")
        .attr("dy", ".75em")
        .attr("transform", `translate(-50, ${height/2}) rotate(-90)`)
        .text("EUR");

})
</script>