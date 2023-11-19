import { convertDateToBrazilianFormat } from './covertDate'; // Substitua 'yourFileName' pelo nome real do arquivo

describe('convertDateToBrazilianFormat', () => {
  it('should convert date to Brazilian format', () => {
    // Data no formato ISO (ano-mês-dia)
    const inputDate = '2023-11-20';
    
    // Chamando a função para converter a data
    const formattedDate = convertDateToBrazilianFormat(inputDate);
    
    // Verificando se a data foi convertida corretamente
    expect(formattedDate).toBe('20/11/2023');
  });

  it('should handle invalid input', () => {
    // Data inválida ou em um formato diferente
    const inputDate = '2023/11/20';
    
    // Chamando a função para converter a data
    const formattedDate = convertDateToBrazilianFormat(inputDate);
    
    // Verificando se a função lida adequadamente com formatos de entrada inválidos
    expect(formattedDate).toBe('Invalid Date');
  });
});
