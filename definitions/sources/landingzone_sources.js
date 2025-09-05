[
 "clothing_db_customers",
 "pubsub_events",
 "pubsub_shipments",
 "branches",
 
].forEach((name) =>
declare({
    type:"declaration",
    database:"datapipeline-468807",
    schema:"landingzone",
    name,
    })
);