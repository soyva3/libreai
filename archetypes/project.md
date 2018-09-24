---
title: "{{ replace .Name "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date }}
year: {{ dateFormat "2006" .Date }}
draft: true
modalID: ""
imgurl: "" #img.jpg
client: ""
clientLink: "#"
category: ""
description: ""
draft: true
---

# {{ replace .Name "-" " " | title }}



## New Cool Posts

{{ range first 10 .Site.RegularPages }}
##  {{ .title }}
{{ end }}
