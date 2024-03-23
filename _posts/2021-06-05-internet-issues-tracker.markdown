---
layout: post

ogtype: article
# ogimage: /assets/img/minecraft-map-tb.png


title:  "Internet issues tracker"
date:   2021-03-12 18:36:00 +0200

last_update: 2021-03-12 18:36:00 +0200
categories: powerbi excel python
description: An internet connectivity tracker with a python web scraper, csv, and PowerBI
ogdescription: Internet issues tracker, python scraper and csv
excerpt_separator: <!--more-->
---
I have several connection issues recently. My connection would drop for several seconds. When reconnecting my upload speed was ridiculus (about 550kbps). Before calling the ISP call center (and the usual crap that goes like: "is the router on?", "have you tried rebooting?", "are all the lights on?", blah, blah, blah), I thought to see how 



<!--more-->
As in any BI enviroment the solution is to store the value inside the datawarehouse (or extracted at runtime if using a virtual datawarehouse technique). Inside the ELK stack Logstash is with respect to a more standard BI architecture (i.e. not using ELK) is the ETL (Extract, Transform, Load) tool.

Logstash has several filters, but none would enable me to achieve what I envisioned. Memorize filter developed by alcanzar (https://github.com/alcanzar/logstash-filter-memorize) was the closest one, yet wasn't directly available for Logstash 7.6 due to requirements. A simple adjusment made the plugin work as intended on Logstash 7.x, but was not possible todo was I wanted to do. This is way I developed the [**logstash-filter-cusum**](https://github.com/deletX/logstash-filter-cusum/) filter plugin.

## Documentation

This plugin is used to do a simple cumulative sum. It has 3 simple parameters:
1. **fields** *[array, required]* this contains the name of the fields that will contain the current cumulative sum value
1. **add_values** *[hash]* a dictionary that indicates the value to add for each field. Defaults to 0
1. **initial_values** *[hash]* a dictionary that indicates the value to use if no stored value is found. Defaults to 0

You can use it in this simple way:
```
filter {
  cusum{
    fields => ["apples","bananas"]
    add_values => {
        "apples"  => "%{apples_to_add}"
        "bananas" => "-2"
      }
    initial_values => {
        "bananas" => "%{[default_bananas]}"
      }
  }
}	
```

## How to install

### 1. From gem file
- Download the latest gemfile from releases

- Install in logstash
```
/bin/logstash-plugin install /path/to/gem/logstash-filter-cumsumm-<version>.gem
```

- Run logstash and have fun

### 2. Build it yourself
- To get started, you'll need JRuby with the Bundler gem installed.

- Clone or download this repo

- Install dependencies
```
bundle install
```

- compile gem file
```
gem build logstash-filter-example.gemspec
```

- Install the plugin as in **1.**