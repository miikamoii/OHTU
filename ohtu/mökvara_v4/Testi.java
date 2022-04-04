import java.sql.*;
public class Testi {
	public static void main(String[] args) {
		System.out.println("Yhdistetaan VillagePeople...");
		Connection  conn = null;
		try {
			conn = yhdista ();
		 } catch (SQLException se) {
            // SQL virheet
            se.printStackTrace();
        } catch (Exception e) {
            // JDBC virheet
            e.printStackTrace();
		}
		String sql = "SELECT toimipiste_id, nimi, email FROM Toimipiste";
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
		// käsitellään resultset
		int id;
		String nimi;
		String email;
		
		try {
			while (tulosjoukko.next () == true){ // tulosjoukossa oletettavasti useampia rivejä
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
		
	}
	public static Connection yhdista() throws SQLException, Exception {
		Connection connection = null;
		String url = "jdbc:mariadb://localhost:3306/vp"; // palvelin = localhost, :portti annettu asennettaessa, tietokannan nimi
		try {
			// ota yhteys kantaan, kayttaja = root, salasana = root
			connection=DriverManager.getConnection(url,"root","mariadb");  //vaihdoin salasanan samaksi kun omalla koneella
		}
		catch (SQLException e) { // tietokantaan ei saada yhteyttä
			connection = null;
			throw e;
		}
		catch (Exception e ) { // JDBC ajuria ei löydy
			throw e;
		}
		return connection; // palautetaan tietokantayhteys
	}
}