
public class Factory extends DocumentFactory {

	@Override
	public Object createDocument(String type) {
		if(type.equalsIgnoreCase("word")) {
			return new word();
		}
		else if(type.equalsIgnoreCase("pdf")) {
			return new pdf();
		}
		else if(type.equalsIgnoreCase("excel")) {
			return new Excel();
		}
		else {
			return null;
		}
	}

}
