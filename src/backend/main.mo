actor {
  public query ({ caller }) func getSiteInfo() : async {
    name : Text;
    tagline : Text;
  } {
    {
      name = "Archiv Agency";
      tagline = "Travel the World with Archiv!";
    };
  };
};
