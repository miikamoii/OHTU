import java.sql.*;
import java.lang.*;

public class Asiakas {

	private int m_asiakas_id;
	private String m_etunimi;
	private String m_sukunimi;
	private String m_lahiosoite;
	private String m_postitoimipaikka;
	private String m_postinro;
	private String m_email;
	private String m_puhelinnro;

    public Asiakas(){
 
    }
	public int getAsiakasId()
	{
		return m_asiakas_id;
	}
	public String getEtunimi() {
		return m_etunimi;
	}
	public String getSukunimi() {
		return m_sukunimi;
	}
	public String getLahiosoite() {
		return m_lahiosoite;
	}
	public String getPostitoimipaikka() {
		return m_postitoimipaikka;
	}
	public String getPostinro() {
		return m_postinro;
	}
	public String getEmail() {
		return m_email;
	}
	public String getPuhelinnro() {
		return m_puhelinnro;
	}
	public void setAsiakasId (int id)
	{
		m_asiakas_id = id;
	}
	public void setEtunimi (String ni) {
		m_etunimi = ni;
	}
	public void setSukunimi (String ni) {
		m_sukunimi = ni;
	}
	public void setLahiosoite (String os) {
		m_lahiosoite = os;
	}
	public void setPostitoimipaikka (String ptp) {
		m_postitoimipaikka = ptp;
	}
	public void setPostinro (String pno) {
		m_postinro = pno;
	}
	public void setEmail (String mail) {
		m_email = mail;
	}
	public void setPuhelinnro (String puhveli) {
		m_puhelinnro = puhveli;
	}
    @Override
    public String toString(){
        return (m_asiakas_id + " " + m_etunimi + " " + m_sukunimi);
    }
	public static Asiakas haeAsiakas (Connection connection, int id) { // tietokantayhteys v‰litet‰‰n parametrina
		// haetaan tietokannasta asiakasta, jonka asiakas_id = id 
		String sql = "SELECT asiakas_id, etunimi, sukunimi, lahiosoite, postitoimipaikka, postinro, email, puhelinnro " 
					+ " FROM Asiakas WHERE asiakas_id = ?"; // ehdon arvo asetetaan j‰ljemp‰n‰
		ResultSet tulosjoukko = null;
		PreparedStatement lause = null;
		try {
			// luo PreparedStatement-olio sql-lauseelle
			lause = connection.prepareStatement(sql);
			lause.setInt( 1, id); // asetetaan where ehtoon (?) arvo
			// suorita sql-lause
			tulosjoukko = lause.executeQuery();	
			if (tulosjoukko == null) { // tulosjoukkoon odotetaan ainoastaan max. yht‰ rivi‰
				System.out.println("Ei loydy asiakasta 12345...");
			}
		} catch (SQLException se) {
            // SQL virheet
            se.printStackTrace();
        } catch (Exception e) {
            // JDBC virheet
            e.printStackTrace();
		}
		// k‰sitell‰‰n resultset - laitetaan tiedot asiakasoliolle
		Asiakas asiakasOlio = new Asiakas ();
		
		try {
			if (tulosjoukko.next () == true){ //k‰yd‰‰n l‰pi kaikki kyselyn rivit
				//asiakas_id, etunimi, sukunimi, lahiosoite, postitoimipaikka, postinro, email, puhelinnro
				//kaikki tiedot otetaan kyselyn tuloksista ja laitetaan olion muuttujiin talteen
				asiakasOlio.setAsiakasId (tulosjoukko.getInt("asiakas_id"));
				asiakasOlio.setEtunimi (tulosjoukko.getString("etunimi"));
				asiakasOlio.setSukunimi(tulosjoukko.getString("sukunimi"));
				asiakasOlio.setLahiosoite (tulosjoukko.getString("lahiosoite"));
				asiakasOlio.setPostitoimipaikka (tulosjoukko.getString("postitoimipaikka"));
				asiakasOlio.setPostinro (tulosjoukko.getString("postinro"));
				asiakasOlio.setEmail (tulosjoukko.getString("email"));
				asiakasOlio.setPuhelinnro (tulosjoukko.getString("puhelinnro"));
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}
		// palautetaan asiakasolio
		
		return asiakasOlio;
	}
	/*public static void main(String[] args) {
		System.out.println("Yhdistetaan VillagePeople...");
		Connection connection = null;
		int lkm = 0;
		try {
			// ota yhteys kantaan (paikallisella koneella portissa 3306, mik‰ kerrottu asennettaessa Mariadb
			// kannan nimi=vptietokanta, kayttaja = root, salasana = root
			connection=DriverManager.getConnection("jdbc:mariadb://localhost:3306/vptietokanta","root","root");
		}
		catch (SQLException e) { // tietokantaan ei saada yhteytt‰
			connection = null;
			System.out.println("Ei yhteytta tietokantaan?????.");
		}
		catch (Exception e ) { // JDBC ajuria ei lˆydy
			System.out.println("JDBC?????.");
		}
		finally {
				System.out.println("Yhteys avattu...");
		}
		*/
		/* kommentoi t‰st‰ eteenp‰in, niin voit helposti testata ainakin tietokannan avaamisen ja sulkemisen 
			kun muutat tietokannan nimen ym. relevanteiksi, jos sinulla joku MariaDB-kanta vain on/
		String sql = "INSERT INTO Asiakas "
		+ "(asiakas_id, etunimi, sukunimi, lahiosoite, postitoimipaikka, postinro, email, puhelinnro) "
		+ " VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
		
		PreparedStatement lause = null;
		try {
			// luo PreparedStatement-olio sql-lauseelle
			lause = connection.prepareStatement(sql);
			// laitetaan arvot INSERTtiin
			lause.setInt( 1, 12001);
			lause.setString(2, "Eero"); 
			lause.setString(3, "Monkkonen"); 
			lause.setString(4, "Karjalankatu 3");
			lause.setString(5, "Joensuu");
			lause.setString(6, "80200");
			lause.setString(7, "eero.monkkonen@karelia.fi");
			lause.setString(8, "0503381126");
			// suorita sql-lause
			lkm = lause.executeUpdate();	
			if (lkm == 0) {
				System.out.println("Ei onnistu...");
			}
		} catch (SQLException se) {
            // SQL virheet
            se.printStackTrace();
        } catch (Exception e) {
            // JDBC virheet
            e.printStackTrace();
		}
	
		// Haetaan asiakkaasn tiedot
		
		Asiakas uusiAsiakas = haeAsiakas (connection, 12001); // v‰litet‰‰n tietokantayhteys ja haettava asid
		System.out.println("Asiakas: " + uusiAsiakas.toString ());
		/* t‰h‰n kommentit kiinni, jos testaat omalla, olemassa olevalla kannallasi /
		
		// suljetaan
		try {
				System.out.println("Suljetaan yhteys...");
				connection.close();
		} catch (SQLException se) {
				//
				se.printStackTrace();
		} catch (Exception e) {
				//
				e.printStackTrace();
		}
		
	}*/
}
