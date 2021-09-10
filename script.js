$(document).ready(function(){
    let urls = [],
        urls_count = 0,
        cors_api_url = 'https://cors-anywhere.herokuapp.com/'
    $(`#add-url`).click(function(){
        let val = $(`#url-input`).val()
        if(!val){
            alert(`Please enter a url`)
        }else{
            urls.push(val)
            $(`#url-input`).val(``)
            $(`#urls`).append(`<li class="d-flex flex-row"><p id="${urls_count}">${val}</p><button class="single-url-test">test</button></li>`)
            urls_count++
        }
    })
    $(document).on(`click`, `.single-url-test`, function(){
        let url = cors_api_url + $(this).prev().text()
        console.log(url)
        $.ajax({
            url,
            method: `GET`,
            success: function(data, textStatus, xhr){
                console.log(xhr.status)
            }
        })
    })

    $(`#test-urls`).click(function(){
        $(`ul#urls li`).each(function(){
            let url = cors_api_url + $(this).children('p').text(),
                id = $(this).children('p').attr(`id`)
                console.log(url)
            $.ajax({
                url,
                method: `GET`,
                success: function(data, textStatus, xhr){
                    console.log(xhr.status)
                    if(xhr.status === 200){
                        $(`#${id}`).append(`<span class="green">${xhr.status}</span>`)
                    }
                },
                error: function(err){
                    console.log(err)
                    $(`#${id}`).append(`<span class="red">${err.status}</span>`)
                }
            })
        })
    })

// ready ends
})