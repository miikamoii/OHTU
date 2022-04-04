import java.sql.*;

public class paaohjelma {

	public static void main(String[] args) {
		System.out.println("Yhdistetaan VillagePeople tietokantaan...");
		Connection  conn = null;
		try {
			conn = yhdista ();
		 } catch (SQLException sqle) {
            System.out.println("SQL virhe");
            sqle.printStackTrace();
        } catch (Exception e) {
            System.out.println("muu virhe (JDBC)");
            e.printStackTrace();
		}
		
		System.out.println(Asiakas.haeAsiakas(conn, 1));
		
		sulje(conn);
		
		/*
		String sql = "SQL lause t�h�n";
		ResultSet tulosjoukko = null;
		PreparedStatement lause = null;
		
		try { //try-catch rakenne sql lauseen suorittamiseen
			lause = conn.prepareStatement(sql); //luo olion sql lauseelle
			tulosjoukko = lause.executeQuery(); //suorittaa sql lauseen ja tulos menee tulosjoukko muuttujaan
			
			if(tulosjoukko == null){ //jos tulosjoukko null, ilmoitetaan siit�
				System.out.println("Tulosjoukko null");
			}
			
		//otetaan virheet kiinni
		}catch (SQLException sqle){
			System.out.println("SQL virhe");
			sqle.printStackTrace();
		}catch (Exception e){
			System.out.println("Muu virhe (JDBC)");
			e.printStackTrace();
		}
		
		//otetaan kyselyn tulokset talteen muuttujiin
		
		int ekaluku;
		int tokaluku;
		int kolmasluku;
		
		try{
			while (tulosjoukko.next() == true){ //jatkaa kunnes rivit loppuu
				ekaluku = tulosjoukko.getInt("luku1"); //tietokannan luku1-sarakkeen rivin arvo
				tokaluku = tulosjoukko.getInt("luku2"); //tietokannan luku2-sarakkeen rivin arvo
				kolmasluku = tulosjoukko.getInt("vikaluku"); //tietokannan vikaluku-sarakkeen rivin arvo
			} // seuraava rivi, jos tietokannasta l�ytyy
		
		//otetaan kiinni virheet
		}catch (SQLException sqle){
			System.out.println("SQL virhe");
			sqle.printStackTrace();
		}
		
		/*String sql = "SELECT toimipiste_id, nimi, email FROM Toimipiste";
		ResultSet tulosjoukko = null;
		PreparedStatement lause = null;
		try {
			// luo PreparedStatement-olio sql-lauseelle
			lause = conn.prepareStatement(sql);
			// suorita sql-lause
			tulosjoukko = lause.executeQuery();	
			if (tulosjoukko == null) {
				System.out.println("Ei loydy...");
			}
		} catch (SQLException se) {
            // SQL virheet
            se.printStackTrace();
        } catch (Exception e) {
            // JDBC virheet
            e.printStackTrace();
		}
		// k�sitell��n resultset
		int id;
		String nimi;
		String email;
		
		try {
			while (tulosjoukko.next () == true){ // tulosjoukossa oletettavasti useampia rivej�
				id = tulosjoukko.getInt("toimipiste_id");
				nimi = tulosjoukko.getString("nimi");
				email = tulosjoukko.getString("email");
				System.out.println(id + " " + nimi + " " + email);
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}
		 
		
		
		// suljetaan
		try {
				System.out.println("Suljetaan yhteys...");
				conn.close();
		} catch (SQLException se) {
				//
				se.printStackTrace();
		} catch (Exception e) {
				//
				e.printStackTrace();
		}
		*/
	}
	
	//metodi ottaa yhteyden tietokantaan (connection)
	public static Connection yhdista() throws SQLException, Exception {
		Connection connection = null;
		//String url = "jdbc:mariadb://localhost:3306/vptietokanta"; // palvelin = localhost, :portti annettu asennettaessa, tietokannan nimi
		String url = "jdbc:mariadb://localhost:3306/vp";
		try {
			// ota yhteys kantaan, kayttaja = root, salasana = root
			connection=DriverManager.getConnection(url,"root","mariadb");
		}
		catch (SQLException e) { // tietokantaan ei saada yhteytt�
			connection = null;
			throw e;
		}
		catch (Exception e ) { // JDBC ajuria ei l�ydy
			throw e;
		}
		return connection; // palautetaan tietokantayhteys
	}
	
	public static void sulje(Connection conn){ //sulkee yhteyden
		try{
			System.out.println("Suljetaan yhteys");
			conn.close();
		}catch (SQLException sqle){
			System.out.println("SQL virhe");
			sqle.printStackTrace();
		}catch (Exception e){
			System.out.println("muu virhe (JDBC)");
			e.printStackTrace();
		}
		
	}
}
