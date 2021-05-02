# btoast

btoast is a simple bootstrap5 + alpinejs notification.
Just include the script :
```html
<script src="./btoast.js"></script>
```

After you can create notification :

Success:

```js
btoast.success("Hello wolrd!");
```

Info:

```js
btoast.info("Hello wolrd!");
```

Warning:

```js
btoast.warning("Hello wolrd!");
```

Error:

```js
btoast.error("Hello wolrd!");
```

You also have access to an history of previous notification:

```js
btoast.get_history();
```