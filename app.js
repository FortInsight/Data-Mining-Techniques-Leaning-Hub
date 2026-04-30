const storageKey = "data-mining-interactive-textbook-v1";

const chapters = [
  {
    id: 1,
    title: "Introduction",
    pages: "Chapter 1 | pp. 12-39",
    summary: "This chapter introduces data mining as part of the broader knowledge discovery process. It explains why data mining matters, what kinds of data and patterns can be mined, which technologies support it, and the major practical and social issues in the field.",
    topics: [
      "Why data mining emerged in the data age",
      "Definition of data mining and KDD",
      "Data types and patterns that can be mined",
      "Technologies behind data mining",
      "Applications, issues, and societal impact"
    ],
    flashcards: [
      { front: "What is data mining?", back: "Data mining is the process of discovering interesting, useful, and understandable patterns from large data collections." },
      { front: "How does KDD relate to data mining?", back: "KDD is the full knowledge discovery process, while data mining is the central step that extracts patterns." },
      { front: "Name three kinds of patterns data mining can discover.", back: "Frequent patterns, classification/regression models, clusters, outliers, and descriptive summaries are common examples." },
      { front: "Why is data mining important in modern systems?", back: "Because data is growing rapidly, and organizations need automated ways to transform raw data into knowledge." }
    ],
    quiz: [
      {
        question: "Which statement best describes data mining?",
        options: [
          "It is only the storage of data in a warehouse",
          "It is the discovery of patterns and knowledge from large data sets",
          "It is the same thing as operating system design",
          "It is only about drawing charts"
        ],
        answerIndex: 1,
        explanation: "Data mining focuses on extracting meaningful patterns and knowledge from data, not just storing or visualizing it."
      },
      {
        question: "What is the role of data mining inside the KDD process?",
        options: [
          "It is the first and only step",
          "It is the core pattern-discovery step inside a larger process",
          "It replaces data cleaning entirely",
          "It is only used after reporting"
        ],
        answerIndex: 1,
        explanation: "KDD includes selection, cleaning, transformation, mining, and interpretation. Data mining is the central extraction step."
      },
      {
        question: "Which of the following is a major data mining task?",
        options: [
          "Cluster analysis",
          "Formatting a printer driver",
          "Typing a bibliography",
          "Replacing a motherboard"
        ],
        answerIndex: 0,
        explanation: "Cluster analysis is a core data mining task used to group similar objects."
      },
      {
        question: "Why do social issues matter in data mining?",
        options: [
          "Because models have no effect on people",
          "Because privacy, bias, and misuse of data can affect society",
          "Because only researchers see mined data",
          "Because social issues are unrelated to computing"
        ],
        answerIndex: 1,
        explanation: "The chapter highlights privacy, ethics, and social impact as major issues in practical data mining."
      },
      {
        question: "Which technology area strongly supports data mining?",
        options: [
          "Machine learning",
          "Wallpaper design",
          "Food chemistry only",
          "Bridge painting"
        ],
        answerIndex: 0,
        explanation: "Machine learning, statistics, and database systems are among the key technologies supporting data mining."
      }
    ]
  },
  {
    id: 2,
    title: "Getting to Know Your Data",
    pages: "Chapter 2 | pp. 41-76",
    summary: "This chapter focuses on understanding data before mining it. It covers attribute types, statistical descriptions, visualization methods, and similarity or dissimilarity measures used to compare data objects.",
    topics: [
      "Attribute and data object types",
      "Basic statistical descriptions",
      "Visualization strategies",
      "Similarity and dissimilarity measures",
      "Data matrices and distance concepts"
    ],
    flashcards: [
      { front: "What is an attribute in data mining?", back: "An attribute is a property or characteristic used to describe an object, such as age, color, or income." },
      { front: "What is the difference between nominal and ordinal attributes?", back: "Nominal attributes name categories without order, while ordinal attributes have a meaningful order." },
      { front: "Why do analysts visualize data before mining?", back: "Visualization helps reveal patterns, distributions, anomalies, and relationships before formal modeling." },
      { front: "What does a similarity measure do?", back: "It quantifies how alike two data objects are, while a dissimilarity measure quantifies how different they are." }
    ],
    quiz: [
      {
        question: "Which attribute type has categories with a meaningful order?",
        options: ["Nominal", "Ordinal", "Binary only", "Identifier only"],
        answerIndex: 1,
        explanation: "Ordinal attributes preserve order, such as low, medium, and high."
      },
      {
        question: "Why are mean, median, and mode useful?",
        options: [
          "They describe central tendency",
          "They replace clustering",
          "They store files",
          "They eliminate outliers automatically"
        ],
        answerIndex: 0,
        explanation: "These are classic measures of central tendency used to summarize a distribution."
      },
      {
        question: "What is the purpose of data visualization?",
        options: [
          "To hide patterns",
          "To inspect patterns and relationships visually",
          "To remove all noise",
          "To avoid measuring similarity"
        ],
        answerIndex: 1,
        explanation: "Visualization helps analysts understand data structure, relationships, and possible anomalies."
      },
      {
        question: "Which measure is commonly used for numeric distance?",
        options: ["Minkowski distance", "Operating margin", "Cache size", "Transaction lock"],
        answerIndex: 0,
        explanation: "Minkowski distance is a family of distance measures used for numeric data."
      },
      {
        question: "Why is understanding data types important before mining?",
        options: [
          "Because all attributes are treated identically",
          "Because the choice of methods depends on attribute type and structure",
          "Because mining ignores data representation",
          "Because only charts matter"
        ],
        answerIndex: 1,
        explanation: "Data representation affects preprocessing, similarity measures, and algorithm choice."
      }
    ]
  },
  {
    id: 3,
    title: "Data Preprocessing",
    pages: "Chapter 3 | pp. 78-110",
    summary: "This chapter explains how to prepare data for mining. It covers data quality issues, cleaning, integration, reduction, transformation, and discretization so that mining algorithms can work more effectively.",
    topics: [
      "Why preprocessing is necessary",
      "Data cleaning and missing values",
      "Data integration and redundancy",
      "Data reduction methods",
      "Transformation, normalization, and discretization"
    ],
    flashcards: [
      { front: "Why is preprocessing necessary in data mining?", back: "Because real-world data is often incomplete, noisy, inconsistent, or too large for effective mining." },
      { front: "What is normalization?", back: "Normalization rescales numeric data so values are comparable across attributes or features." },
      { front: "What is data reduction?", back: "Data reduction decreases data volume while trying to preserve its essential analytical content." },
      { front: "What does discretization do?", back: "It converts continuous values into intervals or categories for easier analysis." }
    ],
    quiz: [
      {
        question: "Which problem is data cleaning meant to handle?",
        options: ["Missing or noisy data", "Only final reporting", "Only user passwords", "Compiler warnings"],
        answerIndex: 0,
        explanation: "Data cleaning addresses missing values, noise, and inconsistencies."
      },
      {
        question: "What is a key goal of data integration?",
        options: [
          "Combining data from multiple sources consistently",
          "Deleting all records",
          "Drawing every chart by hand",
          "Replacing every attribute with text"
        ],
        answerIndex: 0,
        explanation: "Integration merges data sources while resolving redundancy and conflict."
      },
      {
        question: "Which technique is associated with data reduction?",
        options: ["Principal components analysis", "Keyboard layout selection", "Packet routing only", "Font rendering"],
        answerIndex: 0,
        explanation: "PCA is a classic reduction method that compresses information into fewer dimensions."
      },
      {
        question: "What is the purpose of normalization?",
        options: [
          "To put values on comparable scales",
          "To increase missing values",
          "To generate association rules directly",
          "To convert all numbers into words"
        ],
        answerIndex: 0,
        explanation: "Normalization makes features more comparable and often helps downstream learning algorithms."
      },
      {
        question: "Why might discretization be useful?",
        options: [
          "It can simplify continuous data into meaningful bins",
          "It removes all need for modeling",
          "It guarantees zero error",
          "It eliminates every outlier"
        ],
        answerIndex: 0,
        explanation: "Discretization can make patterns easier to detect and easier to interpret."
      }
    ]
  },
  {
    id: 4,
    title: "Data Warehousing and Online Analytical Processing",
    pages: "Chapter 4 | pp. 112-160",
    summary: "This chapter introduces data warehousing concepts and OLAP for multidimensional analysis. It explains warehouse architecture, dimensional models, schemas, OLAP operations, and implementation issues.",
    topics: [
      "Data warehouse concepts and architecture",
      "Multidimensional models and data cubes",
      "Star, snowflake, and fact constellation schemas",
      "OLAP operations",
      "Warehouse design and implementation"
    ],
    flashcards: [
      { front: "What is a data warehouse?", back: "A data warehouse is a subject-oriented, integrated, time-variant, and nonvolatile collection of data for decision support." },
      { front: "What is OLAP used for?", back: "OLAP supports interactive multidimensional analysis such as roll-up, drill-down, slice, and dice." },
      { front: "What is a star schema?", back: "A star schema organizes a central fact table connected to surrounding dimension tables." },
      { front: "What is the purpose of a data cube?", back: "A data cube models data across multiple dimensions for fast aggregation and analysis." }
    ],
    quiz: [
      {
        question: "What is the main purpose of a data warehouse?",
        options: [
          "Decision support and analytical processing",
          "Typing essays only",
          "Replacing every operational system",
          "Drawing user interface icons"
        ],
        answerIndex: 0,
        explanation: "Data warehouses are built to support strategic analysis and decision making."
      },
      {
        question: "Which schema has one fact table and surrounding dimension tables?",
        options: ["Star schema", "Queue schema", "Binary schema", "Heap schema"],
        answerIndex: 0,
        explanation: "The star schema is the classic multidimensional warehouse structure."
      },
      {
        question: "Which is a common OLAP operation?",
        options: ["Drill-down", "Patch kernel", "Train battery", "Compile firmware"],
        answerIndex: 0,
        explanation: "Drill-down is an OLAP operation used to inspect data at finer granularity."
      },
      {
        question: "Why are dimensions important in a data cube?",
        options: [
          "They define perspectives for analysis",
          "They remove the need for facts",
          "They are only decorative labels",
          "They delete metadata"
        ],
        answerIndex: 0,
        explanation: "Dimensions organize data for analysis across perspectives such as time, location, or product."
      },
      {
        question: "Which warehouse idea supports historical analysis?",
        options: [
          "Time-variant storage",
          "Constant deletion",
          "Ignoring metadata",
          "Removing dimensions"
        ],
        answerIndex: 0,
        explanation: "Warehouses store historical data over time, which is essential for trend analysis."
      }
    ]
  },
  {
    id: 5,
    title: "Data Cube Technology",
    pages: "Chapter 5 | pp. 162-204",
    summary: "This chapter examines how data cubes are computed and queried efficiently. It covers materialization strategies, cube computation methods, ranking and prediction cubes, and advanced cube exploration techniques.",
    topics: [
      "Cube materialization concepts",
      "Full, iceberg, closed, and shell cubes",
      "BUC, star-cubing, and multiway aggregation",
      "Top-k and ranking queries",
      "Prediction and multifeature cubes"
    ],
    flashcards: [
      { front: "What is cube materialization?", back: "Cube materialization is the precomputation and storage of cube aggregates to support faster querying." },
      { front: "What is an iceberg cube?", back: "An iceberg cube stores only cube cells whose aggregate values exceed a threshold." },
      { front: "Why are special cube computation methods needed?", back: "Because data cubes can become extremely large and computationally expensive in high dimensions." },
      { front: "What is the benefit of ranking cubes?", back: "They help answer top-k style questions efficiently in multidimensional data." }
    ],
    quiz: [
      {
        question: "Why is cube materialization useful?",
        options: [
          "It speeds up multidimensional query processing",
          "It replaces flashcards",
          "It reduces every cube to one row",
          "It guarantees no storage cost"
        ],
        answerIndex: 0,
        explanation: "Precomputing aggregates allows faster OLAP and analytical querying."
      },
      {
        question: "What does an iceberg cube keep?",
        options: [
          "Only cells meeting a threshold condition",
          "Only frozen data",
          "Only missing values",
          "Only one-dimensional views"
        ],
        answerIndex: 0,
        explanation: "Iceberg cubes store only interesting aggregate cells that pass a support or threshold cutoff."
      },
      {
        question: "Why are efficient cube algorithms important?",
        options: [
          "Because the number of cube cells can explode with dimensionality",
          "Because cubes never get large",
          "Because dimensions are irrelevant",
          "Because SQL cannot use aggregates"
        ],
        answerIndex: 0,
        explanation: "The combinatorial growth of cube cells requires careful optimization."
      },
      {
        question: "What kind of question do ranking cubes support well?",
        options: ["Top-k queries", "Printer setup", "Compiler choice", "Window resizing"],
        answerIndex: 0,
        explanation: "Ranking cubes are designed to support efficient top-k and ranking analytics."
      },
      {
        question: "Which statement best describes data cube technology?",
        options: [
          "Scalable multidimensional aggregation and exploration",
          "Only image compression",
          "Only class labels",
          "Only sequence mining"
        ],
        answerIndex: 0,
        explanation: "Data cube technology focuses on computing, storing, and exploring multidimensional cube structures efficiently."
      }
    ]
  },
  {
    id: 6,
    title: "Mining Frequent Patterns, Associations, and Correlations",
    pages: "Chapter 6 | pp. 206-232",
    summary: "This chapter introduces frequent pattern mining with market basket analysis as a motivating example. It covers itemsets, support and confidence, Apriori, pattern-growth ideas, and correlation-oriented analysis.",
    topics: [
      "Frequent itemsets and association rules",
      "Support and confidence",
      "Apriori and candidate generation",
      "Pattern-growth ideas",
      "Association versus correlation"
    ],
    flashcards: [
      { front: "What is a frequent itemset?", back: "A frequent itemset is a set of items that appears together in transactions often enough to meet a minimum support threshold." },
      { front: "What does support measure?", back: "Support measures how often an itemset appears in the data." },
      { front: "What does confidence measure in an association rule?", back: "Confidence measures how often the rule's conclusion is true when its condition is true." },
      { front: "What is the key idea of Apriori?", back: "If an itemset is frequent, then all of its subsets must also be frequent." }
    ],
    quiz: [
      {
        question: "What is the classic application used to explain association rules?",
        options: ["Market basket analysis", "Compiler testing", "Disk formatting", "Robot balancing"],
        answerIndex: 0,
        explanation: "Market basket analysis is the classic motivating example for frequent pattern mining."
      },
      {
        question: "What does support tell you?",
        options: [
          "How often an itemset occurs",
          "How visually attractive a rule is",
          "How fast memory is",
          "How many charts are available"
        ],
        answerIndex: 0,
        explanation: "Support measures frequency in the transaction database."
      },
      {
        question: "What is confidence in the rule A -> B?",
        options: [
          "The proportion of transactions with A that also contain B",
          "The total number of columns",
          "The number of clusters in A and B",
          "The variance of item counts"
        ],
        answerIndex: 0,
        explanation: "Confidence measures the conditional likelihood of B given A."
      },
      {
        question: "Why is Apriori pruning useful?",
        options: [
          "It cuts down the candidate search space",
          "It generates every pattern repeatedly",
          "It removes all thresholds",
          "It replaces support"
        ],
        answerIndex: 0,
        explanation: "Apriori uses the subset property to prune candidates efficiently."
      },
      {
        question: "Why is correlation analysis important in pattern mining?",
        options: [
          "Because frequent co-occurrence does not always imply meaningful dependence",
          "Because support is never useful",
          "Because itemsets cannot be compared",
          "Because databases ignore rules"
        ],
        answerIndex: 0,
        explanation: "Correlation helps distinguish meaningful relationships from patterns that are only frequent."
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Pattern Mining",
    pages: "Chapter 7 | pp. 234-269",
    summary: "This chapter expands frequent pattern mining into more complex settings, including multilevel and multidimensional patterns, constraint-based mining, colossal patterns, compressed patterns, and pattern applications.",
    topics: [
      "Multilevel and multidimensional associations",
      "Quantitative and rare pattern mining",
      "Constraint-based frequent pattern mining",
      "High-dimensional and colossal patterns",
      "Compressed and application-focused pattern exploration"
    ],
    flashcards: [
      { front: "What is multilevel association mining?", back: "It mines patterns at different concept levels, such as category, brand, and specific product levels." },
      { front: "What is constraint-based pattern mining?", back: "It uses user or data constraints to narrow the search space and focus on useful patterns." },
      { front: "Why are colossal patterns challenging?", back: "Because very large patterns can be difficult to generate, store, and interpret." },
      { front: "Why mine compressed patterns?", back: "Compressed patterns aim to summarize useful structure without listing every redundant pattern." }
    ],
    quiz: [
      {
        question: "What does multilevel pattern mining add?",
        options: [
          "Patterns at different abstraction levels",
          "Only bigger storage",
          "Only image annotations",
          "Only numeric regression"
        ],
        answerIndex: 0,
        explanation: "Multilevel mining studies patterns across concept hierarchies."
      },
      {
        question: "What is the benefit of constraint-based mining?",
        options: [
          "It focuses the search on patterns that satisfy user or problem constraints",
          "It removes all interestingness measures",
          "It guarantees no false patterns",
          "It ignores domain knowledge"
        ],
        answerIndex: 0,
        explanation: "Constraints reduce wasted effort and help target relevant patterns."
      },
      {
        question: "Why are rare patterns important?",
        options: [
          "They may capture unusual but valuable events",
          "They always have the highest support",
          "They replace all frequent patterns",
          "They only matter in graphics"
        ],
        answerIndex: 0,
        explanation: "Rare events can be critical in domains like fraud, security, or diagnosis."
      },
      {
        question: "What is one goal of compressed pattern mining?",
        options: [
          "Reduce redundancy while preserving useful information",
          "Delete all patterns",
          "Turn rules into images only",
          "Avoid user interpretation"
        ],
        answerIndex: 0,
        explanation: "Compressed pattern mining seeks concise but informative pattern sets."
      },
      {
        question: "Which statement best describes advanced pattern mining?",
        options: [
          "Extending pattern mining to richer spaces and constraints",
          "Only storing transactions",
          "Only text formatting",
          "Only sorting arrays"
        ],
        answerIndex: 0,
        explanation: "Advanced pattern mining generalizes basic frequent pattern mining to more challenging settings."
      }
    ]
  },
  {
    id: 8,
    title: "Classification",
    pages: "Chapter 8 | pp. 271-321",
    summary: "This chapter presents the foundations of classification, including decision trees, Bayesian methods, rule-based models, evaluation, and ensemble techniques that improve predictive performance.",
    topics: [
      "What classification is and how models are built",
      "Decision tree induction",
      "Bayes classification methods",
      "Rule-based classification",
      "Evaluation, validation, and ensemble improvement"
    ],
    flashcards: [
      { front: "What is classification?", back: "Classification is supervised learning that predicts a discrete class label for new data based on labeled examples." },
      { front: "Why are decision trees popular?", back: "They are interpretable, easy to visualize, and can model decision rules by recursively splitting data." },
      { front: "What does Naive Bayes assume?", back: "It assumes conditional independence among attributes given the class." },
      { front: "Why is cross-validation useful?", back: "It estimates model performance more reliably by testing across multiple train-test splits." }
    ],
    quiz: [
      {
        question: "What kind of learning problem is classification?",
        options: ["Supervised learning", "Unlabeled grouping only", "Pure storage", "Hardware control"],
        answerIndex: 0,
        explanation: "Classification uses labeled training data to predict class labels."
      },
      {
        question: "Which model is known for recursive splitting and interpretable rules?",
        options: ["Decision tree", "Data cube", "Histogram only", "Hash table"],
        answerIndex: 0,
        explanation: "Decision trees split data recursively based on attribute tests."
      },
      {
        question: "What is a common evaluation method for classifiers?",
        options: ["Cross-validation", "Wallpaper scaling", "Keyboard remapping", "Voltage tuning"],
        answerIndex: 0,
        explanation: "Cross-validation is widely used to estimate predictive performance."
      },
      {
        question: "Why are ensemble methods used?",
        options: [
          "To improve predictive accuracy by combining models",
          "To reduce the number of features to zero",
          "To store data permanently",
          "To remove all class labels"
        ],
        answerIndex: 0,
        explanation: "Methods like bagging, boosting, and random forests combine learners for stronger performance."
      },
      {
        question: "What does Naive Bayes rely on?",
        options: [
          "Conditional independence assumptions",
          "Mandatory tree visualization",
          "Only nearest neighbors",
          "Only unlabeled data"
        ],
        answerIndex: 0,
        explanation: "Naive Bayes assumes attributes contribute independently given the class."
      }
    ]
  },
  {
    id: 9,
    title: "Classification Methods Beyond the Basics",
    pages: "Chapter 9 | pp. 323-359",
    summary: "This chapter extends classification into Bayesian belief networks, neural networks, support vector machines, pattern-based classifiers, lazy learners, and additional advanced topics like transfer learning.",
    topics: [
      "Bayesian belief networks",
      "Backpropagation and neural networks",
      "Support vector machines",
      "Frequent-pattern-based classification",
      "k-nearest neighbors and advanced classification topics"
    ],
    flashcards: [
      { front: "What does a Bayesian belief network represent?", back: "It represents probabilistic dependencies among variables using a directed graphical model." },
      { front: "What is backpropagation used for?", back: "Backpropagation trains neural networks by propagating errors backward to update weights." },
      { front: "What is the core idea of support vector machines?", back: "SVMs aim to find a separating boundary with maximum margin between classes." },
      { front: "What makes k-nearest neighbors a lazy learner?", back: "It delays model construction until prediction time and uses nearby stored examples." }
    ],
    quiz: [
      {
        question: "Which model captures probabilistic relationships among variables in a graph?",
        options: ["Bayesian belief network", "Decision stump only", "Data cube", "Bitmap index"],
        answerIndex: 0,
        explanation: "Bayesian belief networks model dependencies probabilistically through a directed graph."
      },
      {
        question: "What is backpropagation mainly used for?",
        options: [
          "Training neural networks",
          "Compressing data cubes",
          "Cleaning missing values only",
          "Creating OLAP schemas"
        ],
        answerIndex: 0,
        explanation: "Backpropagation is the standard learning method for multilayer neural networks."
      },
      {
        question: "What does an SVM try to maximize?",
        options: ["The separating margin", "The number of dimensions", "The row count", "The histogram width"],
        answerIndex: 0,
        explanation: "SVMs seek a decision boundary with the largest possible margin."
      },
      {
        question: "Why is k-NN called a lazy learner?",
        options: [
          "Because it waits until query time to use training data",
          "Because it never uses data",
          "Because it must always use trees",
          "Because it only handles text"
        ],
        answerIndex: 0,
        explanation: "k-NN stores data and performs learning mainly when a new query arrives."
      },
      {
        question: "Which topic appears as an advanced issue in this section on classification methods?",
        options: ["Transfer learning", "Bitmap join indexing", "Snowflake schema design", "Wavelet compression only"],
        answerIndex: 0,
        explanation: "This section includes additional topics such as multiclass, semi-supervised, active, and transfer learning."
      }
    ]
  },
  {
    id: 10,
    title: "Cluster Analysis",
    pages: "Chapter 10 | pp. 361-402",
    summary: "This chapter introduces clustering as an unsupervised learning task. It covers partitioning, hierarchical, density-based, and grid-based methods as well as ways to evaluate clustering quality.",
    topics: [
      "What cluster analysis is and why it matters",
      "Partitioning methods like k-means and k-medoids",
      "Hierarchical clustering",
      "Density-based and grid-based clustering",
      "Clustering evaluation"
    ],
    flashcards: [
      { front: "What is clustering?", back: "Clustering groups objects so that those in the same cluster are more similar to one another than to those in other clusters." },
      { front: "How does k-means work at a high level?", back: "It assigns points to the nearest centroid and repeatedly updates centroids until convergence." },
      { front: "Why is DBSCAN notable?", back: "DBSCAN finds dense regions, can discover arbitrary shapes, and can identify noise." },
      { front: "Why is cluster evaluation important?", back: "Because clustering results need to be judged for quality, stability, and usefulness." }
    ],
    quiz: [
      {
        question: "What kind of learning task is clustering usually considered?",
        options: ["Unsupervised learning", "Supervised learning only", "Rule parsing", "Schema design"],
        answerIndex: 0,
        explanation: "Clustering generally works without labeled target classes."
      },
      {
        question: "Which method uses centroids as representatives?",
        options: ["k-means", "Apriori", "Naive Bayes", "OLAP roll-up"],
        answerIndex: 0,
        explanation: "k-means is a centroid-based partitioning method."
      },
      {
        question: "Which method is density-based?",
        options: ["DBSCAN", "Decision tree", "Cross-validation", "Snowflake schema"],
        answerIndex: 0,
        explanation: "DBSCAN defines clusters as dense connected regions."
      },
      {
        question: "What is a major challenge in clustering?",
        options: [
          "Determining cluster quality and structure",
          "Adding class labels manually",
          "Guaranteeing one perfect answer",
          "Avoiding all distance measures"
        ],
        answerIndex: 0,
        explanation: "Clustering often involves ambiguity, including the number and quality of clusters."
      },
      {
        question: "How is k-medoids different from k-means?",
        options: [
          "It uses representative objects instead of centroids",
          "It is a warehouse schema",
          "It only handles text files",
          "It needs class labels"
        ],
        answerIndex: 0,
        explanation: "k-medoids uses actual objects as cluster representatives."
      }
    ]
  },
  {
    id: 11,
    title: "Advanced Cluster Analysis",
    pages: "Chapter 11 | pp. 404-442",
    summary: "This chapter extends clustering to probabilistic, fuzzy, high-dimensional, graph-based, and constrained settings. It highlights the challenges that appear when clustering becomes more complex.",
    topics: [
      "Probabilistic and fuzzy clustering",
      "Expectation-maximization",
      "High-dimensional and subspace clustering",
      "Graph and network clustering",
      "Clustering with constraints"
    ],
    flashcards: [
      { front: "What is fuzzy clustering?", back: "Fuzzy clustering allows an object to belong to multiple clusters with different membership strengths." },
      { front: "What does EM do in model-based clustering?", back: "Expectation-Maximization iteratively estimates hidden assignments and updates model parameters." },
      { front: "Why is high-dimensional clustering hard?", back: "Because distance and similarity become less informative as dimensionality increases." },
      { front: "What are clustering constraints?", back: "Constraints are additional conditions such as must-link or cannot-link relationships that guide clustering." }
    ],
    quiz: [
      {
        question: "What is special about fuzzy clustering?",
        options: [
          "Objects can partially belong to multiple clusters",
          "Every object must belong to no cluster",
          "It only works on warehouses",
          "It ignores similarity"
        ],
        answerIndex: 0,
        explanation: "Fuzzy clustering uses soft membership rather than hard assignment."
      },
      {
        question: "What is the EM algorithm used for here?",
        options: [
          "Iterative probabilistic model fitting",
          "Sorting all records alphabetically",
          "Building fact tables",
          "Discretizing by binning only"
        ],
        answerIndex: 0,
        explanation: "EM alternates between estimating cluster assignments and updating model parameters."
      },
      {
        question: "Why are high-dimensional data difficult to cluster?",
        options: [
          "Distance behavior changes and useful structure can hide in subspaces",
          "There are always too few attributes",
          "No algorithms exist",
          "Visualization is impossible in principle"
        ],
        answerIndex: 0,
        explanation: "In high dimensions, many usual distance assumptions weaken, so specialized methods are needed."
      },
      {
        question: "What do must-link and cannot-link rules represent?",
        options: [
          "Clustering constraints",
          "Association support values",
          "OLAP operations",
          "Decision tree splits"
        ],
        answerIndex: 0,
        explanation: "These are common examples of clustering constraints."
      },
      {
        question: "Why cluster graph data differently from tabular data?",
        options: [
          "Because relationships and structure are part of the data itself",
          "Because graphs have no similarity",
          "Because graphs are always supervised",
          "Because graphs cannot be partitioned"
        ],
        answerIndex: 0,
        explanation: "Graph and network data include connection structure that must be modeled during clustering."
      }
    ]
  },
  {
    id: 12,
    title: "Outlier Detection",
    pages: "Chapter 12 | pp. 444-478",
    summary: "This chapter focuses on detecting exceptional or anomalous data points. It presents statistical, proximity-based, clustering-based, classification-based, contextual, collective, and high-dimensional outlier techniques.",
    topics: [
      "Definitions and types of outliers",
      "Statistical and proximity-based methods",
      "Clustering-based and classification-based approaches",
      "Contextual and collective outliers",
      "High-dimensional outlier detection"
    ],
    flashcards: [
      { front: "What is an outlier?", back: "An outlier is a data object that deviates significantly from the majority of the data." },
      { front: "What is a contextual outlier?", back: "A contextual outlier is unusual only when viewed relative to a specific context, such as time or location." },
      { front: "How can proximity-based methods detect outliers?", back: "They flag points that are far from neighbors or lie in sparse local regions." },
      { front: "Why is high-dimensional outlier detection difficult?", back: "Because unusual behavior may appear only in certain subspaces, and distances become less informative." }
    ],
    quiz: [
      {
        question: "Which statement best defines an outlier?",
        options: [
          "A point that deviates strongly from the rest of the data",
          "A guaranteed error in all cases",
          "A cube aggregate",
          "A cluster centroid"
        ],
        answerIndex: 0,
        explanation: "Outliers are unusual objects that stand apart from normal data behavior."
      },
      {
        question: "What makes a contextual outlier different?",
        options: [
          "Its unusualness depends on context",
          "It is always globally extreme",
          "It only appears in labels",
          "It must be frequent"
        ],
        answerIndex: 0,
        explanation: "Contextual outliers are abnormal relative to a context like season, time, or region."
      },
      {
        question: "Which family uses distances or neighborhoods?",
        options: ["Proximity-based methods", "OLAP methods", "Schema methods", "Rule-cover methods only"],
        answerIndex: 0,
        explanation: "Proximity-based methods use neighbor distance or density ideas."
      },
      {
        question: "Why is outlier detection valuable?",
        options: [
          "It can reveal fraud, faults, rare events, or novel behavior",
          "It removes all uncertainty",
          "It replaces every classifier",
          "It works only for images"
        ],
        answerIndex: 0,
        explanation: "Outliers often signal high-value events such as fraud, malfunction, or anomalies."
      },
      {
        question: "What challenge appears in high-dimensional outlier detection?",
        options: [
          "Interesting anomalies may exist only in subspaces",
          "Every point looks exactly the same",
          "No context is ever needed",
          "There are no methods for it"
        ],
        answerIndex: 0,
        explanation: "High-dimensional anomalies may be visible only in selected subspaces rather than full space."
      }
    ]
  },
  {
    id: 13,
    title: "Data Mining Trends and Research Frontiers",
    pages: "Chapter 13 | pp. 481-514",
    summary: "This chapter looks forward. It covers mining complex data types, alternative methodologies, applications in different sectors, privacy and social impacts, and future trends in data mining research.",
    topics: [
      "Mining sequences, graphs, and other complex data",
      "Alternative foundations and methodologies",
      "Industry and scientific applications",
      "Privacy, security, and social impact",
      "Future trends and research directions"
    ],
    flashcards: [
      { front: "Why are complex data types a frontier in data mining?", back: "Because sequences, networks, multimedia, and other rich data types require specialized methods beyond basic tabular mining." },
      { front: "Why does privacy matter in data mining?", back: "Because mining can expose sensitive information and affect individuals and groups if used carelessly." },
      { front: "What is one example of a data mining application area?", back: "Applications include finance, retail, telecommunications, science, engineering, intrusion detection, and recommender systems." },
      { front: "Why study trends and research frontiers?", back: "Because the field evolves quickly, and new data types, methods, and social concerns shape future systems." }
    ],
    quiz: [
      {
        question: "Which is an example of a complex data type discussed as a frontier?",
        options: ["Graphs and networks", "Only spreadsheets", "Only plain integers", "Only passwords"],
        answerIndex: 0,
        explanation: "Graphs, networks, sequences, and other complex data types are key frontier topics."
      },
      {
        question: "Why are privacy and security central issues in data mining?",
        options: [
          "Because mining can affect people through exposure, misuse, or unfair inferences",
          "Because data mining has no social effects",
          "Because privacy matters only in games",
          "Because algorithms never use personal data"
        ],
        answerIndex: 0,
        explanation: "The chapter emphasizes privacy, security, and broader social impact."
      },
      {
        question: "Which is listed as a practical data mining application area?",
        options: ["Recommender systems", "Bridge welding only", "Battery coloring", "Monitor polishing"],
        answerIndex: 0,
        explanation: "Recommender systems are a major application of data mining."
      },
      {
        question: "Why do research frontiers matter for learners?",
        options: [
          "They show where methods are expanding and where open problems remain",
          "They end the need for fundamentals",
          "They only repeat old content",
          "They remove the role of applications"
        ],
        answerIndex: 0,
        explanation: "Research frontiers reveal new directions, challenges, and opportunities in the field."
      },
      {
        question: "What broad message does the final discussion give about data mining?",
        options: [
          "Data mining keeps expanding in methods, applications, and societal importance",
          "Data mining is already complete and finished",
          "Only one algorithm matters now",
          "Future research is unnecessary"
        ],
        answerIndex: 0,
        explanation: "The final discussion highlights continued growth in methods, applications, and research questions."
      }
    ]
  }
];

const chapterCoverage = {
  1: [
    "Why data mining",
    "Moving toward the information age",
    "Evolution of information technology",
    "What is data mining",
    "Database data",
    "Data warehouses",
    "Transactional data",
    "Other kinds of data",
    "Class and concept description",
    "Frequent patterns associations and correlations",
    "Classification and regression",
    "Cluster analysis",
    "Outlier analysis",
    "Pattern interestingness",
    "Statistics",
    "Machine learning",
    "Database systems and data warehouses",
    "Information retrieval",
    "Business intelligence",
    "Web search engines",
    "Mining methodology",
    "User interaction",
    "Efficiency and scalability",
    "Data mining and society"
  ],
  2: [
    "Data objects and attribute types",
    "What is an attribute",
    "Nominal attributes",
    "Binary attributes",
    "Ordinal attributes",
    "Numeric attributes",
    "Discrete versus continuous attributes",
    "Mean median and mode",
    "Range quartiles variance standard deviation and interquartile range",
    "Graphic displays of statistical descriptions",
    "Pixel-oriented visualization",
    "Geometric projection visualization",
    "Icon-based visualization",
    "Hierarchical visualization",
    "Complex data and relation visualization",
    "Data matrix and dissimilarity matrix",
    "Proximity for nominal attributes",
    "Proximity for binary attributes",
    "Minkowski distance",
    "Proximity for ordinal attributes",
    "Dissimilarity for mixed types",
    "Cosine similarity"
  ],
  3: [
    "Data preprocessing overview",
    "Data quality",
    "Major preprocessing tasks",
    "Missing values",
    "Noisy data",
    "Data cleaning as a process",
    "Entity identification",
    "Redundancy and correlation analysis",
    "Tuple duplication",
    "Data value conflict detection and resolution",
    "Data reduction strategies",
    "Wavelet transforms",
    "Principal components analysis",
    "Attribute subset selection",
    "Regression and log-linear models",
    "Histograms",
    "Clustering for reduction",
    "Transformation strategies",
    "Normalization",
    "Discretization by binning",
    "Discretization by histogram analysis",
    "Concept hierarchy generation"
  ],
  4: [
    "What is a data warehouse",
    "Operational database versus data warehouse",
    "Why a separate data warehouse",
    "Multitiered architecture",
    "Enterprise warehouse data mart and virtual warehouse",
    "Metadata repository",
    "Data cube as multidimensional model",
    "Star snowflake and fact constellation schemas",
    "Concept hierarchies in dimensions",
    "Measure categorization and computation",
    "Typical OLAP operations",
    "Starnet query model",
    "Business analysis framework",
    "Warehouse design process",
    "Warehouse usage for information processing",
    "Efficient cube computation overview",
    "Bitmap index and join index",
    "Efficient processing of OLAP queries",
    "ROLAP MOLAP and HOLAP",
    "Attribute-oriented induction",
    "Data characterization",
    "Class comparisons"
  ],
  5: [
    "Cube materialization",
    "Full cube",
    "Iceberg cube",
    "Closed cube",
    "Cube shell",
    "Strategies for cube computation",
    "Multiway array aggregation",
    "BUC downward computation",
    "Star-cubing",
    "Shell fragments",
    "Sampling cubes",
    "Ranking cubes",
    "Top-k queries",
    "Prediction cubes",
    "Multifeature cubes",
    "Exception-based cube exploration",
    "Multidimensional analysis in cube space"
  ],
  6: [
    "Market basket analysis",
    "Frequent itemsets",
    "Closed itemsets",
    "Association rules",
    "Apriori algorithm",
    "Candidate generation",
    "Generating association rules",
    "Improving Apriori efficiency",
    "Pattern-growth approach",
    "Vertical data format",
    "Mining closed and max patterns",
    "Strong rules versus interesting rules",
    "Association analysis",
    "Correlation analysis",
    "Pattern evaluation measures"
  ],
  7: [
    "Pattern mining road map",
    "Multilevel associations",
    "Multidimensional associations",
    "Quantitative association rules",
    "Rare patterns",
    "Negative patterns",
    "Metarule-guided mining",
    "Constraint-based pattern generation",
    "Pruning pattern space",
    "Pruning data space",
    "High-dimensional data mining",
    "Colossal patterns",
    "Pattern-fusion",
    "Compressed pattern mining",
    "Pattern clustering",
    "Redundancy-aware top-k patterns",
    "Semantic annotation of frequent patterns",
    "Applications of pattern mining"
  ],
  8: [
    "What is classification",
    "General approach to classification",
    "Decision tree induction",
    "Attribute selection measures",
    "Tree pruning",
    "Scalability of decision trees",
    "Visual mining for decision tree induction",
    "Bayes theorem",
    "Naive Bayesian classification",
    "IF-THEN rules",
    "Rule extraction from decision trees",
    "Sequential covering algorithm",
    "Metrics for classifier performance",
    "Holdout method",
    "Random subsampling",
    "Cross-validation",
    "Bootstrap",
    "Statistical significance tests",
    "ROC curves",
    "Ensemble methods",
    "Bagging",
    "Boosting and AdaBoost",
    "Random forests",
    "Class-imbalanced data"
  ],
  9: [
    "Bayesian belief networks",
    "Concepts and mechanisms",
    "Training Bayesian belief networks",
    "Multilayer feed-forward neural network",
    "Network topology",
    "Backpropagation",
    "Interpretability of backpropagation",
    "Support vector machines",
    "Linearly separable case",
    "Linearly inseparable case",
    "Associative classification",
    "Discriminative frequent pattern classification",
    "k-nearest-neighbor classifiers",
    "Case-based reasoning",
    "Genetic algorithms",
    "Rough set approach",
    "Fuzzy set approaches",
    "Multiclass classification",
    "Semi-supervised classification",
    "Active learning",
    "Transfer learning"
  ],
  10: [
    "What is cluster analysis",
    "Requirements for cluster analysis",
    "Overview of basic clustering methods",
    "Partitioning methods",
    "k-means",
    "k-medoids",
    "Hierarchical methods",
    "Agglomerative clustering",
    "Divisive clustering",
    "Distance measures in clustering",
    "BIRCH",
    "Chameleon",
    "Probabilistic hierarchical clustering",
    "Density-based methods",
    "DBSCAN",
    "OPTICS",
    "DENCLUE",
    "Grid-based methods",
    "STING",
    "CLIQUE",
    "Assessing clustering tendency",
    "Determining number of clusters",
    "Measuring clustering quality"
  ],
  11: [
    "Probabilistic model-based clustering",
    "Fuzzy clusters",
    "Probabilistic model-based clusters",
    "Expectation-Maximization algorithm",
    "Clustering high-dimensional data",
    "Problems and challenges of high-dimensional clustering",
    "Subspace clustering methods",
    "Biclustering",
    "Types of biclusters",
    "Dimensionality reduction methods",
    "Spectral clustering",
    "Clustering graph data",
    "Clustering network data",
    "Similarity measures for graphs",
    "Graph clustering methods",
    "Clustering with constraints",
    "Constraint categorization",
    "Methods for clustering with constraints"
  ],
  12: [
    "Outliers and outlier analysis",
    "What are outliers",
    "Types of outliers",
    "Challenges of outlier detection",
    "Supervised semi-supervised and unsupervised methods",
    "Statistical methods",
    "Proximity-based methods",
    "Clustering-based methods",
    "Parametric methods",
    "Nonparametric methods",
    "Distance-based outlier detection",
    "Nested loop method",
    "Grid-based method",
    "Density-based outlier detection",
    "Classification-based approaches",
    "Contextual outlier detection",
    "Modeling normal behavior with contexts",
    "Collective outliers",
    "High-dimensional outliers",
    "Outliers in subspaces"
  ],
  13: [
    "Mining sequence data",
    "Time-series data",
    "Symbolic sequences",
    "Biological sequences",
    "Mining graphs and networks",
    "Mining other kinds of data",
    "Statistical data mining",
    "Foundations of data mining",
    "Visual and audio data mining",
    "Financial data analysis",
    "Retail and telecommunication applications",
    "Science and engineering applications",
    "Intrusion detection and prevention",
    "Recommender systems",
    "Ubiquitous and invisible data mining",
    "Privacy security and social impacts",
    "Data mining trends"
  ]
};

const chapterFacts = {
  1: [
    { concept: "data mining", definition: "the discovery of useful and interesting patterns from large data collections", purpose: "to turn large volumes of raw data into actionable knowledge", example: "finding meaningful patterns in customer transactions" },
    { concept: "KDD", definition: "the overall knowledge discovery process that includes cleaning, transformation, mining, and interpretation", purpose: "to organize the full path from raw data to usable knowledge", example: "preparing data before mining and then interpreting the discovered patterns" },
    { concept: "frequent pattern mining", definition: "the discovery of recurring relationships or item combinations in data", purpose: "to reveal regularities such as co-occurring events or products", example: "discovering that bread and milk are often bought together" },
    { concept: "classification", definition: "a predictive task that assigns data objects to predefined categories", purpose: "to build models that predict class labels for new cases", example: "predicting whether an email is spam or not spam" },
    { concept: "cluster analysis", definition: "the grouping of data objects so similar items fall into the same cluster", purpose: "to find structure in unlabeled data", example: "grouping customers into market segments without preexisting labels" },
    { concept: "outlier analysis", definition: "the detection of objects that deviate strongly from the majority of the data", purpose: "to identify rare, suspicious, or unusual behavior", example: "flagging a fraudulent credit-card transaction" }
  ],
  2: [
    { concept: "nominal attribute", definition: "an attribute whose values are names or categories without an inherent order", purpose: "to describe qualitative categories", example: "eye color or country name" },
    { concept: "ordinal attribute", definition: "an attribute whose categories have a meaningful order", purpose: "to rank or order values", example: "low, medium, and high" },
    { concept: "numeric attribute", definition: "an attribute measured as numbers that can support arithmetic operations", purpose: "to represent measurable quantities", example: "income, age, or temperature" },
    { concept: "central tendency", definition: "a summary of where data values are centered", purpose: "to describe the typical value of a distribution", example: "using the mean or median to summarize salaries" },
    { concept: "data visualization", definition: "the graphical display of data to reveal patterns and relationships", purpose: "to help analysts inspect trends, clusters, and anomalies", example: "using scatter plots or histograms before modeling" },
    { concept: "similarity measure", definition: "a measure of how alike two data objects are", purpose: "to support comparison and grouping of objects", example: "using cosine similarity to compare document vectors" }
  ],
  3: [
    { concept: "data cleaning", definition: "the process of detecting and correcting missing, noisy, or inconsistent data", purpose: "to improve data quality before mining", example: "filling missing age values or smoothing noisy sensor readings" },
    { concept: "data integration", definition: "the merging of data from multiple sources into a consistent store", purpose: "to create a unified view for analysis", example: "combining sales records from separate branch databases" },
    { concept: "data reduction", definition: "the reduction of data volume while preserving the important analytical content", purpose: "to make mining faster and more efficient", example: "using principal components analysis to reduce dimensions" },
    { concept: "normalization", definition: "the rescaling of numeric values to a common range or distribution", purpose: "to make attributes comparable for mining algorithms", example: "scaling exam scores to the interval from zero to one" },
    { concept: "discretization", definition: "the conversion of continuous values into intervals or categories", purpose: "to simplify data and support pattern discovery", example: "turning ages into child, adult, and senior groups" },
    { concept: "entity identification", definition: "the task of determining when records from different sources refer to the same real-world object", purpose: "to avoid duplication and integration errors", example: "matching two customer records that belong to the same person" }
  ],
  4: [
    { concept: "data warehouse", definition: "a subject-oriented, integrated, time-variant, and nonvolatile collection of data for decision support", purpose: "to support analysis and strategic decision making", example: "a company warehouse that stores historical sales by region and time" },
    { concept: "OLAP", definition: "online analytical processing for interactive multidimensional analysis", purpose: "to explore data at different levels of detail", example: "drill-down from yearly sales to monthly sales" },
    { concept: "data cube", definition: "a multidimensional model that organizes data by dimensions and measures", purpose: "to support fast aggregation and analysis", example: "analyzing sales by product, location, and time" },
    { concept: "star schema", definition: "a schema with a central fact table linked to surrounding dimension tables", purpose: "to model multidimensional warehouse data efficiently", example: "a sales fact table connected to product, store, and time dimensions" },
    { concept: "drill-down", definition: "an OLAP operation that moves from summarized data to finer detail", purpose: "to inspect lower-level granularity", example: "moving from yearly revenue to quarterly revenue" },
    { concept: "attribute-oriented induction", definition: "a method that generalizes data by climbing concept hierarchies", purpose: "to summarize data for characterization or comparison", example: "generalizing city values to state or country values" }
  ],
  5: [
    { concept: "cube materialization", definition: "the precomputation and storage of cube aggregates", purpose: "to speed up multidimensional query processing", example: "storing precomputed sales totals for common dimension combinations" },
    { concept: "iceberg cube", definition: "a cube that stores only aggregate cells meeting a threshold", purpose: "to reduce storage and focus on important results", example: "keeping only sales combinations whose totals exceed a minimum value" },
    { concept: "closed cube", definition: "a compact cube representation that removes redundant aggregate cells", purpose: "to preserve information with less redundancy", example: "keeping only nonredundant summaries from a large cube" },
    { concept: "BUC", definition: "a top-down method for computing iceberg cubes", purpose: "to compute only useful cube cells efficiently", example: "recursively partitioning dimensions while pruning low-support groups" },
    { concept: "ranking cube", definition: "a cube structure used to answer top-k style analytical queries", purpose: "to efficiently find the highest ranked aggregates", example: "finding the top ten products by region" },
    { concept: "prediction cube", definition: "a cube used for predictive analysis in multidimensional space", purpose: "to combine aggregation with prediction tasks", example: "predicting future sales across product and region dimensions" }
  ],
  6: [
    { concept: "frequent itemset", definition: "a set of items that appears together often enough to satisfy a support threshold", purpose: "to identify common patterns in transaction data", example: "bread and milk appearing together in many baskets" },
    { concept: "support", definition: "the proportion or count of transactions containing a pattern", purpose: "to measure how common a pattern is", example: "a rule appearing in twenty percent of transactions" },
    { concept: "confidence", definition: "the conditional probability that the rule conclusion is true when the premise is true", purpose: "to measure the strength of an association rule", example: "if customers buy bread they also buy butter seventy percent of the time" },
    { concept: "Apriori", definition: "a frequent itemset mining algorithm based on candidate generation and subset pruning", purpose: "to reduce the search space for association analysis", example: "discarding candidate itemsets whose subsets are not frequent" },
    { concept: "pattern-growth mining", definition: "a method that grows frequent patterns without generating large candidate sets", purpose: "to improve mining efficiency", example: "using prefix-based growth instead of repeated candidate generation" },
    { concept: "correlation analysis", definition: "the evaluation of whether items are meaningfully related rather than merely frequent", purpose: "to separate useful associations from misleading co-occurrence", example: "checking whether two products are truly linked rather than just individually popular" }
  ],
  7: [
    { concept: "multilevel association mining", definition: "the discovery of associations across different abstraction levels in a concept hierarchy", purpose: "to reveal patterns from broad categories down to specific items", example: "finding patterns at the dairy level and also at the cheese brand level" },
    { concept: "multidimensional association mining", definition: "the mining of rules involving multiple dimensions or attributes", purpose: "to capture richer relationships than single transaction items alone", example: "linking age group, income range, and purchase behavior" },
    { concept: "quantitative association rule", definition: "an association rule involving numeric ranges or quantities", purpose: "to mine patterns from numeric data", example: "customers aged twenty to thirty with income in a specific range often buy laptops" },
    { concept: "constraint-based mining", definition: "pattern mining guided by user or data constraints", purpose: "to focus discovery on patterns that matter to the user", example: "mining only rules that include a product category of interest" },
    { concept: "colossal pattern", definition: "a very large frequent pattern that contains many items", purpose: "to study large and potentially meaningful complex associations", example: "a long gene pattern discovered across biological data" },
    { concept: "compressed pattern", definition: "a compact representation that summarizes many related patterns", purpose: "to reduce redundancy in discovered results", example: "storing a concise cluster of similar frequent patterns instead of every variant" }
  ],
  8: [
    { concept: "decision tree", definition: "a tree-structured classifier built by recursively splitting data on attributes", purpose: "to produce interpretable predictive rules", example: "splitting loan applicants by income and debt to predict default risk" },
    { concept: "attribute selection measure", definition: "a criterion used to choose the best attribute for a decision tree split", purpose: "to create effective tree branches", example: "using information gain to decide the next split" },
    { concept: "tree pruning", definition: "the removal of branches that do not improve generalization", purpose: "to reduce overfitting in decision trees", example: "cutting small unreliable branches after training" },
    { concept: "naive Bayes", definition: "a Bayesian classifier that assumes conditional independence among attributes given the class", purpose: "to classify efficiently using probability", example: "predicting email spam based on word frequencies" },
    { concept: "cross-validation", definition: "an evaluation method that repeatedly splits data into training and testing folds", purpose: "to estimate classifier performance reliably", example: "ten-fold cross-validation for comparing models" },
    { concept: "random forest", definition: "an ensemble of decision trees built on random data samples and feature subsets", purpose: "to improve predictive accuracy and robustness", example: "combining many trees to classify medical cases" }
  ],
  9: [
    { concept: "Bayesian belief network", definition: "a directed probabilistic graphical model showing dependencies among variables", purpose: "to reason under uncertainty with linked variables", example: "modeling how symptoms and diseases influence one another" },
    { concept: "backpropagation", definition: "a learning algorithm that updates neural network weights by propagating prediction error backward", purpose: "to train multilayer neural networks", example: "adjusting a network after a wrong handwritten digit prediction" },
    { concept: "support vector machine", definition: "a classifier that seeks a separating hyperplane with maximum margin", purpose: "to classify data with strong separation ability", example: "separating two classes of documents in feature space" },
    { concept: "associative classification", definition: "a classification method that uses association rules whose consequents are class labels", purpose: "to combine pattern mining with prediction", example: "rules like high income and low debt imply low risk" },
    { concept: "k-nearest neighbors", definition: "a classifier that labels an object according to the classes of nearby stored examples", purpose: "to predict using local similarity", example: "classifying a new point by the majority label of its nearest neighbors" },
    { concept: "transfer learning", definition: "the reuse of knowledge from one task or domain in another related task", purpose: "to improve learning when new labeled data is limited", example: "adapting a model trained in one domain to a similar new domain" }
  ],
  10: [
    { concept: "cluster analysis", definition: "the grouping of objects so members of the same cluster are similar to each other", purpose: "to reveal structure in unlabeled data", example: "grouping shoppers into natural segments" },
    { concept: "k-means", definition: "a partitioning algorithm that represents each cluster by its centroid", purpose: "to form clusters by minimizing within-cluster variation", example: "iteratively updating centroids for customer groups" },
    { concept: "k-medoids", definition: "a partitioning algorithm that uses actual data objects as cluster representatives", purpose: "to reduce sensitivity to outliers compared with centroid methods", example: "choosing representative objects instead of average points" },
    { concept: "hierarchical clustering", definition: "a clustering strategy that builds a hierarchy of nested clusters", purpose: "to study cluster structure at multiple levels", example: "forming a dendrogram by repeatedly merging closest groups" },
    { concept: "DBSCAN", definition: "a density-based algorithm that finds connected dense regions and labels sparse points as noise", purpose: "to discover arbitrarily shaped clusters", example: "separating dense spatial regions from isolated noise points" },
    { concept: "clustering quality evaluation", definition: "the assessment of how meaningful and well-formed the produced clusters are", purpose: "to judge whether clustering results are useful", example: "measuring compactness and separation of clusters" }
  ],
  11: [
    { concept: "fuzzy clustering", definition: "a clustering approach where an object may belong to multiple clusters with different degrees", purpose: "to model overlapping groups", example: "a document partially belonging to both business and technology topics" },
    { concept: "probabilistic model-based clustering", definition: "a clustering approach that assumes data are generated by probabilistic models", purpose: "to capture uncertainty and hidden structure", example: "modeling clusters as mixtures of probability distributions" },
    { concept: "Expectation-Maximization", definition: "an iterative method that alternates between estimating hidden assignments and updating parameters", purpose: "to fit probabilistic cluster models", example: "recomputing soft cluster memberships and then parameter values" },
    { concept: "subspace clustering", definition: "the discovery of clusters in subsets of dimensions rather than the full space", purpose: "to handle high-dimensional data more effectively", example: "finding gene-expression clusters using only relevant dimensions" },
    { concept: "spectral clustering", definition: "a clustering method that uses eigenstructure of similarity graphs to partition data", purpose: "to reveal structure not easily found by simple geometric methods", example: "clustering points using graph Laplacian information" },
    { concept: "clustering constraints", definition: "additional rules such as must-link and cannot-link used to guide cluster formation", purpose: "to incorporate domain knowledge into clustering", example: "forcing two related records to stay in the same cluster" }
  ],
  12: [
    { concept: "outlier", definition: "a data object that deviates significantly from the majority behavior in a data set", purpose: "to reveal anomalies, rare cases, or suspicious behavior", example: "a fraudulent purchase far outside normal spending" },
    { concept: "statistical outlier detection", definition: "the use of statistical models to identify observations unlikely under normal behavior", purpose: "to detect anomalies with distribution-based reasoning", example: "flagging values far beyond the expected normal range" },
    { concept: "proximity-based outlier detection", definition: "the detection of outliers using distance or neighborhood relationships", purpose: "to find objects isolated from other points", example: "marking a point whose nearest neighbors are very far away" },
    { concept: "density-based outlier detection", definition: "the detection of objects that lie in regions of significantly lower density than their neighbors", purpose: "to identify local anomalies", example: "a point in a sparse pocket beside a dense cluster" },
    { concept: "contextual outlier", definition: "an outlier whose abnormality depends on a specific context", purpose: "to model anomalies that are unusual only under certain conditions", example: "a winter temperature that would be normal in summer but not in January" },
    { concept: "collective outlier", definition: "a set of related data objects whose joint behavior is abnormal even if individual objects are not", purpose: "to detect unusual group behavior", example: "a suspicious sequence of network events that looks normal item by item" }
  ],
  13: [
    { concept: "sequence data mining", definition: "the mining of ordered data such as time series or symbolic sequences", purpose: "to discover temporal or sequential patterns", example: "finding repeated event sequences in clickstream data" },
    { concept: "graph and network mining", definition: "the analysis of graph-structured data where relationships are central", purpose: "to discover structure in connected data", example: "studying communities in a social network" },
    { concept: "statistical data mining", definition: "a view of data mining that emphasizes statistical models and inference", purpose: "to connect pattern discovery with rigorous statistical reasoning", example: "using statistical models to validate discovered trends" },
    { concept: "recommender systems", definition: "systems that suggest items to users based on preferences or behavior", purpose: "to personalize decisions and choices", example: "recommending movies based on past ratings" },
    { concept: "privacy-preserving concerns", definition: "issues involving the protection of sensitive information during mining and analysis", purpose: "to reduce harm and misuse of data", example: "limiting exposure of personal data during analytics" },
    { concept: "research frontier", definition: "an emerging direction where new methods, data types, or challenges are still developing", purpose: "to guide future innovation in data mining", example: "developing mining methods for multimedia and networked data" }
  ]
};

<<<<<<< HEAD
enrichChapters();

=======
>>>>>>> db1b2cb (m)
const uiStateKey = "data-mining-interactive-textbook-ui-v1";
const savedUiState = loadUiState();
const state = {
  chapterIndex: savedUiState.chapterIndex ?? 0,
  flashcardIndex: savedUiState.flashcardIndex ?? 0,
  flashcardFlipped: false,
  selectedLevel: savedUiState.selectedLevel ?? 1,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizResults: []
};

const progress = loadProgress();
const currentPage = document.body.dataset.page || "home";

const elements = {
  navLinks: [...document.querySelectorAll("[data-nav]")],
  chapterSelect: document.getElementById("chapter-select"),
  chapterCurrentCard: document.getElementById("chapter-current-card"),
  completedCount: document.getElementById("completed-count"),
  currentChapterLabel: document.getElementById("current-chapter-label"),
  bestScoreLabel: document.getElementById("best-score-label"),
  chapterTitle: document.getElementById("chapter-title"),
  chapterPages: document.getElementById("chapter-pages"),
  chapterSummaryText: document.getElementById("chapter-summary-text"),
  chapterTopics: document.getElementById("chapter-topics"),
  savedProgressList: document.getElementById("saved-progress-list"),
  savedProgressEmpty: document.getElementById("saved-progress-empty"),
<<<<<<< HEAD
=======
  toggleLevelPanelButton: document.getElementById("toggle-level-panel-button"),
  levelPanelContent: document.getElementById("level-panel-content"),
>>>>>>> db1b2cb (m)
  levelGrid: document.getElementById("level-grid"),
  quizStatus: document.getElementById("quiz-status"),
  quizScorePill: document.getElementById("quiz-score-pill"),
  quizProgressBar: document.getElementById("quiz-progress-bar"),
  quizQuestion: document.getElementById("quiz-question"),
  quizOptions: document.getElementById("quiz-options"),
  quizFeedback: document.getElementById("quiz-feedback"),
  nextQuestionButton: document.getElementById("next-question-button"),
  quizPanel: document.getElementById("quiz-panel"),
  quizResults: document.getElementById("quiz-results"),
  quizResultsSummary: document.getElementById("quiz-results-summary"),
  quizResultsList: document.getElementById("quiz-results-list"),
  retryQuizButton: document.getElementById("retry-quiz-button"),
  nextLevelButton: document.getElementById("next-level-button"),
  flashcard: document.getElementById("flashcard"),
<<<<<<< HEAD
=======
  flashcardFrontFace: document.querySelector(".flashcard-front"),
  flashcardBackFace: document.querySelector(".flashcard-back"),
>>>>>>> db1b2cb (m)
  flashcardFrontText: document.getElementById("flashcard-front-text"),
  flashcardBackText: document.getElementById("flashcard-back-text"),
  cardPosition: document.getElementById("card-position"),
  prevCardButton: document.getElementById("prev-card-button"),
  nextCardButton: document.getElementById("next-card-button")
};

function init() {
  attachEvents();
  renderNavigation();
  renderChapterSelector();
  renderCurrentChapterCard();
  updateProgressPanel();
  if (elements.levelGrid) {
    renderLevelButtons();
  }
  renderPage();
  registerServiceWorker();
}

function attachEvents() {
  if (elements.chapterSelect) {
    elements.chapterSelect.addEventListener("change", (event) => {
      selectChapter(Number(event.target.value));
    });
  }

<<<<<<< HEAD
=======
  if (elements.toggleLevelPanelButton) {
    elements.toggleLevelPanelButton.addEventListener("click", toggleLevelPanel);
  }

>>>>>>> db1b2cb (m)
  if (elements.prevCardButton) {
    elements.prevCardButton.addEventListener("click", () => moveFlashcard(-1));
  }

  if (elements.nextCardButton) {
    elements.nextCardButton.addEventListener("click", () => moveFlashcard(1));
  }

  if (elements.flashcard) {
    elements.flashcard.addEventListener("click", flipFlashcard);
  }

  if (elements.nextQuestionButton) {
    elements.nextQuestionButton.addEventListener("click", moveToNextQuestion);
  }

  if (elements.retryQuizButton) {
    elements.retryQuizButton.addEventListener("click", resetQuiz);
  }

  if (elements.nextLevelButton) {
    elements.nextLevelButton.addEventListener("click", moveToNextLevel);
  }
}

function renderNavigation() {
  elements.navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === currentPage);
  });
}

function renderChapterSelector() {
  if (!elements.chapterSelect) {
    return;
  }

  elements.chapterSelect.innerHTML = chapters
    .map((chapter, index) => `<option value="${index}">Chapter ${chapter.id}: ${chapter.title}</option>`)
    .join("");
  elements.chapterSelect.value = String(state.chapterIndex);
}

function renderCurrentChapterCard() {
  if (!elements.chapterCurrentCard) {
    return;
  }

  const chapter = getCurrentChapter();
  const chapterProgress = progress[chapter.id] || {};
  const completedLevels = Object.keys(chapterProgress.levels || {}).length;
  const viewedCards = chapterProgress.flashcardsViewed || 0;

  elements.chapterCurrentCard.innerHTML = `
    <strong>Chapter ${chapter.id}</strong>
    <span>${chapter.title}</span>
    <span class="chapter-meta">${completedLevels > 0 ? `${completedLevels}/10 levels completed` : "No levels completed yet"} | Cards viewed: ${viewedCards}</span>
  `;
}

function selectChapter(index) {
  state.chapterIndex = Number.isFinite(index) ? index : 0;
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  state.selectedLevel = 1;
  state.quizQuestions = [];
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  saveUiState();
  renderCurrentChapterCard();
  updateProgressPanel();
  if (elements.levelGrid) {
    renderLevelButtons();
  }
  renderPage();
}

function renderPage() {
  renderHomePage();
  renderFlashcardPage();
  renderQuizPage();
}

function renderHomePage() {
  if (!elements.chapterTitle) {
    return;
  }

  const chapter = getCurrentChapter();
  elements.chapterTitle.textContent = `Chapter ${chapter.id}: ${chapter.title}`;
  if (elements.chapterPages) {
    elements.chapterPages.textContent = chapter.pages;
  }
  if (elements.chapterSummaryText) {
    elements.chapterSummaryText.textContent = chapter.summary;
  }
  if (elements.chapterTopics) {
    elements.chapterTopics.innerHTML = chapter.subtopics.map((topic) => `
      <div class="topic-item">
        <strong>${topic}</strong>
        <span>Study this idea in the flashcards, then test it on the quiz page.</span>
      </div>
    `).join("");
  }
  renderSavedProgressList();
}

function renderSavedProgressList() {
  if (!elements.savedProgressList || !elements.savedProgressEmpty) {
    return;
  }

  const entries = chapters
    .map((chapter) => {
      const chapterProgress = progress[chapter.id];
      if (!chapterProgress) {
        return null;
      }

      const levels = Object.entries(chapterProgress.levels || {})
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([level, details]) => `Level ${level} (${details.bestScore || 0}/10)`);
      const viewedCards = chapterProgress.flashcardsViewed || 0;

      if (!levels.length && !viewedCards) {
        return null;
      }

      return {
        chapter,
        levels,
        viewedCards
      };
    })
    .filter(Boolean);

  if (!entries.length) {
    elements.savedProgressEmpty.classList.remove("hidden");
    elements.savedProgressList.innerHTML = "";
    return;
  }

  elements.savedProgressEmpty.classList.add("hidden");
  elements.savedProgressList.innerHTML = entries.map((entry) => `
    <div class="saved-item">
      <strong>Chapter ${entry.chapter.id}: ${entry.chapter.title}</strong>
      <div class="saved-item-meta">${entry.levels.length ? `Completed levels: ${entry.levels.join(", ")}` : "No completed quiz levels yet"}</div>
      <div class="saved-item-meta">Flashcards viewed: ${entry.viewedCards}</div>
    </div>
  `).join("");
}

function renderFlashcardPage() {
  if (!elements.flashcard) {
    return;
  }

  const chapter = getCurrentChapter();
  const safeIndex = Math.min(state.flashcardIndex, chapter.flashcards.length - 1);
  state.flashcardIndex = Math.max(0, safeIndex);
  const card = chapter.flashcards[state.flashcardIndex];

  elements.flashcard.classList.toggle("flipped", state.flashcardFlipped);
  elements.flashcardFrontText.textContent = card.front;
  elements.flashcardBackText.textContent = card.back;
  elements.cardPosition.textContent = `Card ${state.flashcardIndex + 1} of ${chapter.flashcards.length}`;
  syncFlashcardHeight();
}

function moveFlashcard(direction) {
  const chapter = getCurrentChapter();
  state.flashcardIndex = (state.flashcardIndex + direction + chapter.flashcards.length) % chapter.flashcards.length;
  state.flashcardFlipped = false;
  saveUiState();
  renderFlashcardPage();
}

function flipFlashcard() {
  state.flashcardFlipped = !state.flashcardFlipped;
  if (state.flashcardFlipped) {
    saveFlashcardProgress();
  }
  renderFlashcardPage();
}

<<<<<<< HEAD
=======
function syncFlashcardHeight() {
  if (!elements.flashcard || !elements.flashcardFrontFace || !elements.flashcardBackFace) {
    return;
  }

  window.requestAnimationFrame(() => {
    const minimumHeight = window.innerWidth <= 760 ? 500 : 420;
    const frontHeight = elements.flashcardFrontFace.scrollHeight;
    const backHeight = elements.flashcardBackFace.scrollHeight;
    elements.flashcard.style.height = `${Math.max(minimumHeight, frontHeight, backHeight)}px`;
  });
}

>>>>>>> db1b2cb (m)
function renderQuizPage() {
  if (!elements.levelGrid) {
    return;
  }

<<<<<<< HEAD
=======
  syncLevelPanelState();
>>>>>>> db1b2cb (m)
  renderLevelButtons();
  if (!state.quizQuestions.length) {
    resetQuiz();
    return;
  }
  renderQuiz();
}

function startLevel(level) {
  state.selectedLevel = level;
  state.quizQuestions = [];
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  saveUiState();
  renderLevelButtons();
<<<<<<< HEAD
=======
  setLevelPanelCollapsed(true);
>>>>>>> db1b2cb (m)
  resetQuiz();
  if (elements.quizQuestion) {
    elements.quizQuestion.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function resetQuiz() {
  if (!elements.quizPanel || !elements.quizResults) {
    return;
  }

  state.quizQuestions = getCurrentLevelQuestions();
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  saveUiState();
  elements.quizPanel.classList.remove("hidden");
  elements.quizResults.classList.add("hidden");
  renderQuiz();
}

function renderQuiz() {
  if (!elements.quizQuestion) {
    return;
  }

  const question = state.quizQuestions[state.quizIndex];

  if (!question) {
    if (state.quizQuestions.length === 0) {
      elements.quizStatus.textContent = "Choose a level to begin";
      elements.quizScorePill.textContent = "Score: 0";
      elements.quizQuestion.textContent = "Pick one level above to start your 10-question quiz set.";
      elements.quizOptions.innerHTML = "";
      elements.quizFeedback.className = "quiz-feedback hidden";
      elements.quizFeedback.innerHTML = "";
      elements.nextQuestionButton.classList.add("hidden");
      elements.quizProgressBar.style.width = "0";
      return;
    }
    renderQuizResults();
    return;
  }

  elements.quizStatus.textContent = `Level ${state.selectedLevel} | Question ${state.quizIndex + 1} of ${state.quizQuestions.length}`;
  elements.quizScorePill.textContent = `Score: ${state.quizScore}`;
  elements.quizProgressBar.style.width = `${(state.quizIndex / state.quizQuestions.length) * 100}%`;
  elements.quizQuestion.textContent = question.question;
  elements.quizOptions.innerHTML = "";
  elements.quizFeedback.className = "quiz-feedback hidden";
  elements.quizFeedback.innerHTML = "";
  elements.nextQuestionButton.classList.add("hidden");

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(optionIndex));
    elements.quizOptions.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (state.quizAnswered || !elements.quizOptions) {
    return;
  }

  state.quizAnswered = true;
  const question = state.quizQuestions[state.quizIndex];
  const isCorrect = selectedIndex === question.answerIndex;
  const optionButtons = [...elements.quizOptions.querySelectorAll(".quiz-option")];

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answerIndex) {
      button.classList.add("correct");
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.quizScore += 1;
  }

  state.quizResults.push({
    question: question.question,
    selected: question.options[selectedIndex],
    correct: question.options[question.answerIndex],
    explanation: question.explanation,
    isCorrect
  });

  elements.quizScorePill.textContent = `Score: ${state.quizScore}`;
  elements.quizFeedback.className = `quiz-feedback ${isCorrect ? "correct" : "wrong"}`;
  elements.quizFeedback.innerHTML = `
    <div class="feedback-head">
      <span class="feedback-emoji">${isCorrect ? "ðŸŽ‰" : "ðŸ“•"}</span>
      <strong>${isCorrect ? "Correct answer" : "Wrong answer"}</strong>
    </div>
    <div>${question.explanation}</div>
  `;
  elements.nextQuestionButton.textContent = state.quizIndex === state.quizQuestions.length - 1 ? "See Results" : "Next Question";
  elements.nextQuestionButton.classList.remove("hidden");
}

function moveToNextQuestion() {
  if (!state.quizAnswered) {
    return;
  }

  state.quizIndex += 1;
  state.quizAnswered = false;
  renderQuiz();
}

function renderQuizResults() {
  const chapter = getCurrentChapter();
  const chapterProgress = ensureChapterProgress(chapter.id);
  const previousBest = chapterProgress.levels[state.selectedLevel]?.bestScore || 0;
  const bestScore = Math.max(previousBest, state.quizScore);

  chapterProgress.levels[state.selectedLevel] = {
    bestScore,
    completed: true,
    completedAt: new Date().toISOString()
  };
  saveProgress();

  elements.quizPanel.classList.add("hidden");
  elements.quizResults.classList.remove("hidden");
  elements.quizProgressBar.style.width = "100%";
  elements.quizResultsSummary.textContent = `You scored ${state.quizScore} out of ${state.quizQuestions.length} in Chapter ${chapter.id}, Level ${state.selectedLevel}. Best saved score for this level: ${bestScore}/${state.quizQuestions.length}.`;
  elements.quizResultsList.innerHTML = state.quizResults.map((result, index) => `
    <div class="result-item">
      <strong>Q${index + 1}: ${result.isCorrect ? "Correct" : "Needs review"}</strong>
      <span>${result.question}</span>
      <span>Your answer: ${result.selected}</span>
      <span>Correct answer: ${result.correct}</span>
      <span>${result.explanation}</span>
    </div>
  `).join("");

  renderCurrentChapterCard();
  renderLevelButtons();
  updateProgressPanel();
  renderSavedProgressList();
}

function renderLevelButtons() {
  if (!elements.levelGrid) {
    return;
  }

  const chapter = getCurrentChapter();
  elements.levelGrid.innerHTML = "";

  for (let level = 1; level <= 10; level += 1) {
    const bestScore = progress[chapter.id]?.levels?.[level]?.bestScore;
    const isCompleted = Boolean(progress[chapter.id]?.levels?.[level]?.completed);
    const button = document.createElement("button");
    button.className = `level-button ${state.selectedLevel === level ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("data-level", String(level));
    button.innerHTML = `
      <strong>Level ${level}</strong>
      <span class="level-meta">${isCompleted ? `Done | Best: ${bestScore}/10` : "10 questions"}</span>
    `;
    button.addEventListener("click", () => startLevel(level));
    elements.levelGrid.appendChild(button);
  }
}

<<<<<<< HEAD
=======
function toggleLevelPanel() {
  if (!elements.levelPanelContent) {
    return;
  }

  const isCollapsed = elements.levelPanelContent.classList.contains("collapsed");
  setLevelPanelCollapsed(!isCollapsed);
}

function setLevelPanelCollapsed(collapsed) {
  if (!elements.levelPanelContent || !elements.toggleLevelPanelButton) {
    return;
  }

  elements.levelPanelContent.classList.toggle("collapsed", collapsed);
  elements.toggleLevelPanelButton.textContent = collapsed ? "Show Levels" : "Hide Levels";
  elements.toggleLevelPanelButton.setAttribute("aria-expanded", String(!collapsed));
}

function syncLevelPanelState() {
  if (!elements.levelPanelContent) {
    return;
  }

  setLevelPanelCollapsed(true);
}

>>>>>>> db1b2cb (m)
function moveToNextLevel() {
  if (state.selectedLevel < 10) {
    startLevel(state.selectedLevel + 1);
    return;
  }
  startLevel(state.selectedLevel);
}

function updateProgressPanel() {
  const chapter = getCurrentChapter();
  const completed = Object.values(progress).reduce((total, item) => total + Object.keys(item.levels || {}).length, 0);
  const chapterLevels = progress[chapter.id]?.levels || {};
  const bestScore = Object.values(chapterLevels).reduce((best, level) => Math.max(best, level.bestScore || 0), 0);
  const viewedCards = progress[chapter.id]?.flashcardsViewed || 0;

  if (elements.completedCount) {
    elements.completedCount.textContent = `${completed} / ${chapters.length * 10}`;
  }
  if (elements.currentChapterLabel) {
    elements.currentChapterLabel.textContent = `Chapter ${chapter.id}`;
  }
  if (elements.bestScoreLabel) {
    elements.bestScoreLabel.textContent = bestScore ? `Best level score ${bestScore}/10 | Cards viewed ${viewedCards}` : viewedCards ? `Cards viewed ${viewedCards}` : "No activity yet";
  }
}

function getCurrentChapter() {
  return chapters[Math.max(0, Math.min(chapters.length - 1, state.chapterIndex))];
}

function getCurrentLevelQuestions() {
  const chapter = getCurrentChapter();
  const start = (state.selectedLevel - 1) * 10;
  return chapter.questionBank.slice(start, start + 10);
}

function ensureChapterProgress(chapterId) {
  if (!progress[chapterId]) {
    progress[chapterId] = { levels: {}, flashcardsViewed: 0 };
  }
  if (!progress[chapterId].levels) {
    progress[chapterId].levels = {};
  }
  if (!Number.isFinite(progress[chapterId].flashcardsViewed)) {
    progress[chapterId].flashcardsViewed = 0;
  }
  return progress[chapterId];
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function loadUiState() {
  try {
    return JSON.parse(localStorage.getItem(uiStateKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveUiState() {
  localStorage.setItem(uiStateKey, JSON.stringify({
    chapterIndex: state.chapterIndex,
    flashcardIndex: state.flashcardIndex,
    selectedLevel: state.selectedLevel
  }));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

function enrichChapters() {
  chapters.forEach((chapter) => {
    chapter.subtopics = chapterCoverage[chapter.id] || chapter.topics;
    chapter.facts = chapterFacts[chapter.id] || [];
    chapter.studyItems = buildStudyItems(chapter);
  });

  chapters.forEach((chapter) => {
    const factCards = chapter.studyItems.map((fact) => ({
      front: `Explain ${fact.concept}.`,
      back: `${fact.concept.toUpperCase()}\n\nMeaning: ${fact.definition}.\n\nWhy it matters: ${fact.purpose}.\n\nExample: ${fact.example}.\n\nStudy link: This is a core idea in the book section "${chapter.title}".`
    }));

    const generatedFlashcards = chapter.subtopics.map((topic, index) => ({
      front: `How would you explain "${topic}"?`,
      back: buildTopicExplanation(chapter, topic, index)
    }));

<<<<<<< HEAD
    chapter.flashcards = [...chapter.flashcards, ...factCards, ...generatedFlashcards];
=======
    chapter.flashcards = dedupeFlashcards([...chapter.flashcards, ...factCards, ...generatedFlashcards]);
>>>>>>> db1b2cb (m)
    chapter.questionBank = buildQuestionBank(chapter);
  });
}

function buildTopicExplanation(chapter, topic, index) {
  const matchingFact = (chapter.studyItems || []).find((fact) => normalizeText(fact.concept) === normalizeText(topic));
  if (matchingFact) {
    return `${matchingFact.concept.toUpperCase()}\n\nMeaning: ${matchingFact.definition}.\n\nWhy it matters: ${matchingFact.purpose}.\n\nExample: ${matchingFact.example}.\n\nStudy tip: Connect this idea back to the full book section theme "${chapter.title}".`;
  }

  const summarySentences = chapter.summary.split(". ").filter(Boolean);
  const selectedSentence = summarySentences[index % summarySentences.length] || chapter.summary;
  return `${topic.toUpperCase()}\n\nThis topic matters because ${selectedSentence.replace(/\.$/, "")}.\n\nUse this card to remember the idea before taking the quiz.`;
}

function createSeededRandom(seed) {
  let value = seed;
  return function next() {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

function shuffle(list, randomFn = Math.random) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(randomFn() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildQuestionBank(chapter) {
  const bank = [];
  const seenQuestions = new Set();
  for (let level = 1; level <= 10; level += 1) {
    for (let offset = 0; offset < 10; offset += 1) {
      const question = generateQuestion(chapter, level, offset, seenQuestions);
      bank.push(question);
      seenQuestions.add(normalizeText(question.question));
    }
  }
  return bank;
}

function generateQuestion(chapter, level, offset, seenQuestions = new Set()) {
  const facts = chapter.studyItems || chapter.facts || [];
  const startIndex = ((level - 1) * 10 + offset) % facts.length;
  const seed = createSeededRandom(chapter.id * 1000 + level * 50 + offset);
  const templateIndex = (level + offset) % questionTemplates.length;

  for (let shift = 0; shift < facts.length; shift += 1) {
    const focus = facts[(startIndex + shift) % facts.length];
    for (let attempt = 0; attempt < questionTemplates.length; attempt += 1) {
      const builder = questionTemplates[(templateIndex + attempt) % questionTemplates.length];
      const candidate = finalizeQuestion(builder(chapter, focus, level, offset, seed));
      if (!seenQuestions.has(normalizeText(candidate.question))) {
        return candidate;
      }
    }
  }

  return finalizeQuestion(questionTemplates[0](chapter, facts[startIndex], level, offset, seed));
}

function pickFactDistractors(chapter, concept, field, count) {
  const localPool = (chapter.studyItems || chapter.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact[field]);
  const globalPool = chapters
    .flatMap((item) => item.studyItems || item.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact[field]);
  return uniqueSlice([...localPool, ...globalPool], count);
}

function pickFactStatementDistractors(chapter, concept, field, count) {
  const localPool = (chapter.studyItems || chapter.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => `${fact.concept}: ${fact[field]}`);
  const globalPool = chapters
    .flatMap((item) => item.studyItems || item.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => `${fact.concept}: ${fact[field]}`);
  return uniqueSlice([...localPool, ...globalPool], count);
}

function pickFactConceptDistractors(chapter, concept, count) {
  const localPool = (chapter.studyItems || chapter.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact.concept);
  const globalPool = chapters
    .flatMap((item) => item.studyItems || item.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact.concept);
  return uniqueSlice([...localPool, ...globalPool], count);
}

function buildStudyItems(chapter) {
  const items = [...(chapter.facts || [])];
  const seen = new Set(items.map((item) => normalizeText(item.concept)));
  const summarySentences = chapter.summary
    .split(". ")
    .map((sentence) => sentence.replace(/\.$/, "").trim())
    .filter(Boolean)
    .map((sentence) => sentence.replace(/^this chapter\s+/i, "this section "));

  chapter.subtopics.forEach((topic, index) => {
    const key = normalizeText(topic);
    if (seen.has(key)) {
      return;
    }
    const summarySentence = summarySentences[index % summarySentences.length] || chapter.summary;
    const neighbor = chapter.subtopics[(index + 1) % chapter.subtopics.length] || chapter.title;
    items.push({
      concept: topic,
      definition: `${topic} is a key idea from ${chapter.title.toLowerCase()} that supports understanding of ${summarySentence.toLowerCase()}.`,
      purpose: `to strengthen understanding of ${topic.toLowerCase()} in relation to ${neighbor.toLowerCase()}`,
      example: `reviewing how ${topic.toLowerCase()} appears in the ${chapter.title.toLowerCase()} discussion and examples`
    });
    seen.add(key);
  });

  return items;
}

function dedupeFlashcards(cards) {
  const seen = new Set();
  return cards.filter((card) => {
    const key = cardTopicKey(card);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function cardTopicKey(card) {
  return normalizeText(card.front)
    .replace(/^explain\s+/, "")
    .replace(/^how would you explain\s+/, "")
    .replace(/["?.]/g, "")
    .trim();
}

function uniqueOptions(options) {
  const seen = new Set();
  return options.filter((option) => {
    const key = normalizeText(option);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function finalizeQuestion(question) {
  const correctAnswer = question.options[question.answerIndex];
  const options = [correctAnswer];
  uniqueOptions(question.options).forEach((option) => {
    if (!options.some((item) => normalizeText(item) === normalizeText(option))) {
      options.push(option);
    }
  });

  if (options.length < 4) {
    const fillerPool = uniqueOptions(chapters.flatMap((chapter) => (chapter.studyItems || chapter.facts || []).map((fact) => fact.concept)));
    fillerPool.forEach((option) => {
      if (options.length < 4 && !options.some((item) => normalizeText(item) === normalizeText(option))) {
        options.push(option);
      }
    });
  }

  const shuffledOptions = shuffle(
    options.slice(0, 4),
    createSeededRandom(normalizeText(question.question).length + normalizeText(correctAnswer).length)
  );

  return {
    ...question,
    options: shuffledOptions,
    answerIndex: shuffledOptions.findIndex((option) => normalizeText(option) === normalizeText(correctAnswer))
  };
}

const questionTemplates = [
  (chapter, focus, level, offset, seed) => {
    const correct = focus.definition;
    const options = shuffle([correct, ...pickFactDistractors(chapter, focus.concept, "definition", 3)], seed);
    return {
      question: `Which statement best describes ${focus.concept}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} is defined as ${focus.definition}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = `${focus.concept}: ${focus.purpose}`;
    const options = shuffle([correct, ...pickFactStatementDistractors(chapter, focus.concept, "purpose", 3)], seed);
    return {
      question: `Which statement correctly explains why ${focus.concept} matters?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} matters because it helps ${focus.purpose}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = focus.concept;
    const options = shuffle([correct, ...pickFactConceptDistractors(chapter, focus.concept, 3)], seed);
    return {
      question: `Which concept matches this description: ${focus.definition}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} is the concept defined as ${focus.definition}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = focus.concept;
    const options = shuffle([correct, ...pickFactConceptDistractors(chapter, focus.concept, 3)], seed);
    return {
      question: `A student wants to learn the idea used to ${focus.purpose}. Which concept should they study?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `The correct concept is ${focus.concept}, because its role is to ${focus.purpose}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = focus.concept;
    const options = shuffle([correct, ...pickFactConceptDistractors(chapter, focus.concept, 3)], seed);
    return {
      question: `Which concept would you study if you wanted to ${focus.purpose}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `You would study ${focus.concept}, because its role is to ${focus.purpose}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = `${focus.concept}: ${focus.example}`;
    const options = shuffle([correct, ...pickFactStatementDistractors(chapter, focus.concept, "example", 3)], seed);
    return {
      question: `Which example best illustrates ${focus.concept}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.example} is a good example of ${focus.concept}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = focus.concept;
    const options = shuffle([correct, ...pickFactConceptDistractors(chapter, focus.concept, 3)], seed);
    return {
      question: `In the section "${chapter.title}", which idea is most connected to this example: ${focus.example}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `That example points to ${focus.concept}.`
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = `${focus.concept}: ${focus.definition}`;
    const options = shuffle([correct, ...pickFactStatementDistractors(chapter, focus.concept, "definition", 3)], seed);
    return {
      question: `Which concept-and-meaning pair is correct for this book section?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} means ${focus.definition}.`
    };
  }
];

enrichChapters();
init();

function uniqueSlice(list, count) {
  const seen = new Set();
  const result = [];
  for (const item of list) {
    const key = typeof item === "string" ? item : `${item.id}-${item.title}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(item);
    if (result.length === count) {
      break;
    }
  }
  return result;
}

function normalizeText(text) {
  return String(text).trim().toLowerCase();
}

function saveFlashcardProgress() {
  const chapter = getCurrentChapter();
  const chapterProgress = ensureChapterProgress(chapter.id);
  chapterProgress.flashcardsViewed = Math.max(chapterProgress.flashcardsViewed || 0, state.flashcardIndex + 1);
  saveProgress();
  saveUiState();
  renderCurrentChapterCard();
  updateProgressPanel();
  renderSavedProgressList();
}

