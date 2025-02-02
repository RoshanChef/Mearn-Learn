### React form
Either use this .. 

```
		<label>
				First Name
				<input type="text" id="firstName" name="firstName" onChange={changeHandler} placeholder="First Name" />
        </label>
```

or

```
<label htmlFor="firstName">First Name</label>
	<input type="text" id="firstName" name="firstName" onChange={changeHandler} placeholder="First Name" />
```
### Note : id & htmlFor must be same 

### name attribute & object properties in useState must be same
Eg ..

```
	const [formData, setFormData] = useState({ firstName: "", lastName: "" });

        <label>
                First Name
					<input type="text" id="firstName" name="firstName" onChange={changeHandler} placeholder="First Name" />
        </label>
```

### controlled component 
every component manages its own state
By using value attribute


```
	const [formData, setFormData] = useState({ firstName: "", lastName: "" });

        <label>
                First Name
					<input type="text" id="firstName" name="firstName" onChange={changeHandler} placeholder="First Name" value={formData.firstName} />
        </label>
```


### All things are same but different here is checkbox 
which doesn't contains any ```value``` it contains ```checked``` which is either true or false