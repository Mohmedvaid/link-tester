$(document).ready(function(){
    let urls = []
    let urls_count = 0
    $(`#add-url`).click(function(){
        let val = $(`#url-input`).val()
        if(!val){
            alert(`Please enter a url`)
        }else{
            urls.push(val)
            $(`#url-input`).val(``)
            $(`#urls`).append(`<li><div id="${urls_count}">${val}</div><button class="single-url-test">test</button></li>`)
        }
    })
    $(document).on(`click`, `.single-url-test`, function(){
        let url = $(this).prev().text()
        console.log(url)
        $.ajax({
            url,
            method: `GET`,
            success: function(data){
                console.log(data)
            }
        })
    })

    $(`#test-urls`).click(function(){
        if(urls.length===0){
            alert(`Please add urls to test`)
        }
        $.ajax({
            url: `/test`,
            method: `POST`,
            data: {urls: urls},
            success: function(data){
                console.log(data)
            }
        })
    })



// ready ends
})