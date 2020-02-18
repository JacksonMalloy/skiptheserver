# Create Organization

### Query

```
mutation createOrganization($data: OrganizationCreateInput!) {
  createOrganization(data: $data) {
    id
    name
    owner {
      name
    }
  }
}
```

### Variables

```
{
  "data": {
    "name": "boston pizza",
    "owner": {
      "connect": {
        "id": "ck68eo3mi000w0747dk6qnebb"
      }
    }
  }
}
```

# Delete Organization

### Query

```
mutation deleteOrganization($data: OrganizationWhereUniqueInput!) {
  deleteOrganization(where: $data) {
    id
    name
  }
}
```

### Variables

```
{
  "data": {
    "id": "ck68ec1d900f008548c8xl3u4"
  }
}
```
