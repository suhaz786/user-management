# Elastic Stack
- LogStash
    - LogStash offers common connectors, transformations, and outputs,  
    - there is an open-source community building additional connectors and addition transformations for almost any scenario you may encounter.
- Beats 
    - ingest data in real-time by looking at transactions occurring in the database or potentially new data being written to a file that you're watching. - - - It's a lightweight ingestion engine that helps keep your cluster fresh with near real-time data
    
- Elastic Search
    - Elasticsearch essentially ingests the data that it's being given and create indexes of these documents and distribute them across all of the nodes in its cluster
    - Elasticsearch provides an interface using HTTP to search the documents and has many built-in algorithms for scoring them and allow an intense customization of your search results
    
- Kibana - provide UI for using elastic as analystics tool or tuning

- Add-On : Xpack (Security, Alerts, Monitoring, Reporting, Graph)

### Elastic Advantages:
- Horizontal Scaling
    - By horizontally scaling, you can spin up your elastic cluster to handle any amount of data. It offers near real-time results with log session Beats ingestion tools and it helps you do things like anomaly detection, identify fraud, because it's all happening in real-time
- NoSQL
- Real Time
- Advanced Query Language

#### Download Kibana and Elastic

 - Elastic Configurations are in 
```text
/Users/suhaz/Documents/Softwares/elasticsearch-7.0.0/config/elasticsearch.yml
```
     
 - Start Elastic
```text
bin/elasticsearch
```
```text
[Suhazs-MacBook-Pro.local] publish_address {127.0.0.1:9200}, bound_addresses {[::1]:9200}, {127.0.0.1:9200}
```
Kibana available under /Users/suhaz/Documents/Softwares/kibana-7.0.0

 - Start kibana
```text
bin/kibana
```
```text
[info][listening] Server running at http://localhost:5601
```

#### KIBANA Commands
```text
<REST verb> <index>/<type> <ID>
```
 - Cluster Health
```text
GET _cat/health?v
```
```text
epoch      timestamp cluster              status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent
1557904412 07:13:32  suhas_learns_elastic yellow          1         1      3   3    0    0        1             0                  -                 75.0%

```
 -  Nodes
```text
GET _cat/nodes?v
```
```text
ip        heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
127.0.0.1           19          84  22                          mdi       *      JLT01262L
```

 - Indices
```text
GET _cat/indices?v
```
```text
health status index                uuid                   pri rep docs.count docs.deleted store.size pri.store.size
green  open   .kibana_task_manager JfvXknVGQAycakSKS70Uqg   1   0          2            0     45.5kb         45.5kb
yellow open   sales                XAc2GcASSWKEou88tn5cvA   1   1          2            0      7.9kb          7.9kb
green  open   .kibana_1            1bINujOAQMSWdAks0IwbaQ   1   0          4            0     14.7kb         14.7kb
```

 - Create Index 
```text
PUT sales
```

 - Insert data into the index
```text

PUT sales/order/123
{
  "orderID" : "123",
  "orderAmount" : "500"
}
```
```text
PUT sales/order/124
{
  "orderID" : "124",
  "orderAmount" : "1000"
}
```

- Bulk Insert
```text
POST _bulk 
{ "index":{ "_index": "sales", "_type": "order" } }
{ "orderID":"125","orderAmount":250 }
{ "index":{ "_index": "sales", "_type": "order" } }
{ "orderID":"126","orderAmount":350 }
{ "index":{ "_index": "sales", "_type": "order" } }
{ "orderID":"127","orderAmount":150 }
```

- Read data
```text
GET sales
```
```text
GET sales/order/123
```

- Delete Index
```text
DELETE sales
```

- Search Index without any condition
```text
GET sales/_search
```

- Search Index with one condition
```text
GET sales/_search
{
"query": {
  "match": {
    "orderID": "125"
           }
  }
}
```

- Search across multiple index
```text
GET _search
{
"query": {
  "match": {
    "orderID": "125"
           }
  }
}
```

- Search Index with AND condition using MUST keyword
```text
GET _search 
{
  "query": {
    "bool": {
      "must": [
        {"match": {
          "orderID": "125"
        }},
        {"match": {
          "orderAmount": "250"
        }}
      ]
    }
  }
}
```

- Search Index with AND condition using SHOULD keyword
```text
GET sales/_search 
{
  "query": {
    "bool": {
      "should": [
        {"match": {"orderID": "125"} },
        {"match": {"orderAmount": "250"} }
      ]
    }
  }
}
```

- Search Index with NOT condition
```text
GET _search 
{
  "query": {
    "bool": {
      "must_not": [
        {"match": {
          "_id": "123"
        }},
        {"match": {
          "orderAmount": "1231"
        }}
      ]
    }
  }
}
```

### BULK UPLOAD DATA
 - endpoint is /_bulk

 - The bulk request body has the following, slightly unusual, format:
```text
{ action: { metadata }}\n
{ request body        }\n
{ action: { metadata }}\n
{ request body        }\n
...
```
 - Every line must end with a newline character (\n), including the last line. These are used as markers to allow for efficient line separation.
   
 - The lines cannot contain unescaped newline characters, as they would interfere with parsing. This means that the JSON must not be pretty-printed.

 - The action/metadata line specifies what action to do to which document.

The action must be one of the following:
- create
    - Create a document only if the document does not already exist. See Creating a New Document.
- index
    - Create a new document or replace an existing document. See Indexing a Document and Updating a Whole Document.
- update
    - Do a partial update on a document. See Partial Updates to Documents.
- delete
    - Delete a document. See Deleting a Document.

#### DATA TYPES IN ELASTIC
?????
