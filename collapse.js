
// collapse
let buttonCollapse, legend;
buttonCollapse= document.getElementById('collapseLegend');
legend=document.querySelector('.legend ul');
buttonCollapse.addEventListener('click',function(){
if(buttonCollapse.classList=='comprimir'){
    legend.style.display='block';
    buttonCollapse.textContent='Cerrar leyenda';
    buttonCollapse.classList.remove('comprimir');
}else{
      legend.style.display='none';
    buttonCollapse.textContent='Mostrar leyenda';
    buttonCollapse.classList.add('comprimir');
}
})