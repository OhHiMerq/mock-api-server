# mock-api-server

## run server
```
npm run start
```

## run local tunnel
```
npm run expose
```
copy created url

## sample body json
```
{
    "deliveryId":"1002",
    "completedAt":"18373737"
}
```

## sample output
```
{
    "data": {
        "input": {
            "deliveryId": "1002",
            "completedAt": "18373737"
        },
        "message": "Delivery 1002 is set to complete at 18373737"
    }
}
```
