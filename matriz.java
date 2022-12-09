import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner entradaTeclado = new Scanner(System.in);
		int tamanhoMatriz = 3;
		int matrizA [][] = new int [tamanhoMatriz][tamanhoMatriz];
		int linha, coluna, somaElementosDaDiagonalSecundaria = 0, somaElementos = 0;

		System.out.print ("\nMatriz A\n");
		for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				System.out.print ("Digite um valor para linha "+ linha + " e um valor para coluna "+ coluna + " : ");
				matrizA[linha][coluna] = entradaTeclado.nextInt();
			}
		}
		 System.out.print ("\nMatriz A:\n");
		 for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				System.out.printf("%4d ", matrizA[linha][coluna]);
			}
			System.out.println ();
		}	
		 
		 System.out.print("\nElemetos da diagonal principal:\n");
		 for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				if(coluna == linha)
				{
					System.out.print( matrizA[linha][coluna]+"   ");
				}
			}
		}
		System.out.print("\n**********************\n");
		System.out.print("\nTodos os elementos, exceto os elementos da diagonal principal:\n");
		 for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				if(coluna != linha)
				{
					System.out.print( matrizA[linha][coluna]+"   ");
				}
			}
		}
		System.out.print("\n**********************\n");
		System.out.print("\nOs elementos acima da diagonal principal\n");
		 for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				if(coluna > linha)
				{
					System.out.print( matrizA[linha][coluna]+"   ");
				}
			}
		}
		System.out.print("\n**********************\n");
		System.out.print("\nA soma dos elementos da diagonal secundária\n");
		 for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				if((coluna + linha) == tamanhoMatriz - 1)
				{
					somaElementosDaDiagonalSecundaria += matrizA[linha][coluna];
				}
			}
		}
		System.out.println( somaElementosDaDiagonalSecundaria);
		System.out.print("\n**********************\n");		System.out.print("\nA soma de todos os elementos\n");
		 for(linha = 0; linha < tamanhoMatriz; linha++){
			for(coluna = 0; coluna < tamanhoMatriz; coluna++)
			{
				somaElementos += matrizA[linha][coluna];
			}
		}
	System.out.println( somaElementos);	
	}
}
