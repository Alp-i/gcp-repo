[
 "clothing_db_customers",
 "pubsub_salesdata"
].forEach((name) =>
declare({
    type:"declaration",
    database:"datapipeline-468807",
    schema:"landingzone",
    name,
    })
);