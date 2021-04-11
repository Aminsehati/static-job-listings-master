class Articles{
    async apiQuery(){
        const res = await fetch('../data.json');
        const data = await res.json();
        return data
    }
}
class UI {
    showArticles(data){
        console.log(data);
        let result = '';
        let skill ='';
        data.map((item,index)=>{
            item.languages.map((item)=>{
                skill+=`
                <a href="#">
                    ${item}
                </a>
                `
            });
            result+=`
                <div class="article">
                    <div class="article-info col-lg-6 col-md-12">
                        <div class="profile-img">
                         <img src="${item.logo}"/>
                        </div>
                        <div class="profile-title">
                            <h4>
                                ${item.company}
                            </h4>
                            <h2>
                                ${item.position}
                            </h2>
                            <div class="meta">
                                <span>
                                    ${item.postedAt}
                                </span>
                                <span>
                                    ${item.contract}
                                </span>
                                <span>
                                    ${item.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="skill col-lg-6 col-md-12">
                    ${skill}
                    </div>
                </div>
            `
        });
        document.querySelector('.articles').innerHTML = result;
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    const articles = new Articles();
    const ui = new UI();
    articles.apiQuery().then((data)=>{
        ui.showArticles(data);
    });
});