# Create Menu

### Query

```
mutation createMenu($title: String!, $id: String!) {
  createMenu(title: $title, id: $id) {
    title
  }
}
```

### Variables

```
{
    "title": "another test in here",
    <!-- Organization ID -->
  	"id": "ck6y1l2mj009207403984mbw6"
}
```
