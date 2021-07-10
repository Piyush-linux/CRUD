let del = document.querySelectorAll(".del")
let server_host ="https://piyush-crud.herokuapp.com"
let local_host ="https://localhost:3000"
/*del.map((x)=>{
	x.onclick=()=>{
		console.log('delete')
	}
})*/
// on click
del.forEach((ele, i) => {
    ele.onclick = () => {
        console.log(ele)
        let id = ele.getAttribute("data-id")
        console.log(id)
        req(id)
    }
});

let req = async (id) => {
    try {
        let url = `${server_host}/api/user/${id}`
        let del = await fetch(url, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, })
        })
        console.log(del)
        document.location.href = server_host;
    } catch (err) {
        console.log(err)
    }
}