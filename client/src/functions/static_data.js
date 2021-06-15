export const getNomeTipo = (value) => {
    var arr = [ 'Administrator','Gerente', 'Funcionário'];

    return arr [value -1];

};
export const getNomeTipoLabel= (value) => {
    var arr = [ 'primary','default', 'secondary'];

    return arr [value -1];
}